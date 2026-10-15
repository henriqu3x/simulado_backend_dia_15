import prisma from '../database/prisma.js'

class LivroRepositories {
     async visualizar(){
          const result = await prisma.livro_autor.findMany({
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    },
                    autor: true
               }
          })

          return result
     }
     async buscarPorId(livro){
          const result = await prisma.livro_autor.findUnique({
               where: {
                    id: livro.id
               },
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    },
                    autor: true
               }
          })

          return result
     }
     async buscarPorIsbn(livro){
          const result = await prisma.livro_autor.findFirst({
               where: {
                    livro: {
                         isbn: livro.isbn
                    }
               }
          })

          return result
     }
          async buscarEmprestimosAtivos(livro) {
               const result = await prisma.emprestimo_exemplar.findFirst({
                    where: {
                         exemplar: {
                              livro: {
                                   id: livro.id
                              }
                         },
                         emprestimo: {
                              status: {
                                   in: ['em aberto', 'em atraso']
                              }
                         }
                    }
               })

               return result
     }
     async buscarEmprestimos(livro) {
          const result = await prisma.emprestimo_exemplar.findFirst({
               where: {
                    exemplar: {
                         livro: {
                              id: livro.id
                         }
                    }
               }
          })

          return result
     }
     async adicionar(livro){
          const result = await prisma.$transaction(async(fx)=> {
               const book = await fx.livro.create({
                    data: {
                         isbn: livro.isbn,
                         titulo: livro.titulo,
                         ano_publicacao: livro.ano_publicacao,
                         edicao: livro.edicao,
                         editora: livro.editora,
                         categoria_id: livro.categoria_id,
                         descricao: livro.descricao
                    },
                    
               })

               const livro_autor = await fx.livro_autor.create({
                    data: {
                         livro_id: book.id,
                         autor_id: livro.autor_id
                    },
                    include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    },
                    autor: true
               }
               })

               return livro_autor
          })

          return result
     }
     async atualizar(livro){
          const result = await prisma.$transaction(async(fx)=> {
               const livro_autor = await fx.livro_autor.update({
                    where: {
                         id: livro.id
                    },
                    data: {
                         autor_id: livro.autor_id
                    },
                    include: {
                         autor: true
                    }
               })
               const book = await fx.livro.update({
                    where: {
                         id: livro_autor.livro_id
                    },
                    data: {
                         isbn: livro.isbn,
                         titulo: livro.titulo,
                         ano_publicacao: livro.ano_publicacao,
                         edicao: livro.edicao,
                         editora: livro.editora,
                         categoria_id: livro.categoria_id,
                         descricao: livro.descricao
                    },
                    include: {
                         categoria: true
                    }
               })


               return {
                    id: livro_autor.id,
                    ativo: livro_autor.ativo,
                    livro: book,
                    autor: livro_autor.autor
               }
          })

          return result
     }
     async arquivar(livro){
          const result = await prisma.$transaction(async(fx) => {
               const atual = await fx.livro_autor.findUnique({
                    where: {
                         id: livro.id
                    }
               })

               const novo = await fx.livro_autor.update({
                    where: {
                         id: livro.id
                    },
                    data: {
                         ativo: !atual.ativo
                    },
                    include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    },
                    autor: true
               }
               })

               return novo
          })

          return result
     }
     async deletar(livro) {
          const result = await prisma.livro.delete({
               where: {
                    id: livro.id
               },
               include: {
                    livro_autor: true
               }
          })

          return result
     }
}

export default LivroRepositories