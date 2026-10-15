import prisma from '../database/prisma.js'

class AutorRepositories {
     async visualizar(){
          const result = await prisma.autor.findMany()

          return result
     }
     async buscarPorId(autor){
          const result = await prisma.autor.findUnique({
               where: {
                    id: autor.id
               }
          })

          return result
     }
     async adicionar(autor){
          const result = await prisma.autor.create({
               data: {
                    nome: autor.nome,
                    nascionalidade: autor.nascionalidade,
                    data_nascimento: new Date(autor.data_nascimento)
               }
          })

          return result
     }
     async atualizar(autor){
          const result = await prisma.autor.update({
               where: {
                    id: autor.id
               },
               data: {
                    nome: autor.nome,
                    nascionalidade: autor.nascionalidade,
                    data_nascimento: new Date(autor.data_nascimento)
               }
          })

          return result
     }
     async arquivar(autor){
          const result = await prisma.$transaction(async(fx) => {
               const atual = await fx.autor.findUnique({
                    where: {
                         id: autor.id
                    }
               })

               const novo = await fx.autor.update({
                    where: {
                         id: autor.id
                    },
                    data: {
                         ativo: !atual.ativo
                    }
               })

               return novo
          })

          return result
     }
}

export default AutorRepositories