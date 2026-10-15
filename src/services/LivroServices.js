import AppError from '../errors/AppError.js';
import LivroRepositories from '../repositories/LivroRepositories.js'
import 'dotenv/config'

class LivroServices {
     constructor() {
          this.livro_repositories = new LivroRepositories()
     }

     async visualizar() {
         const result = await this.livro_repositories.visualizar() 

         return result
     }
     async buscarPorId(livro) {
          const result = await this.livro_repositories.buscarPorId(livro)

          if (!result) {
               throw new AppError("Nenhuma livro com esse id encontrado",404);
               
          }

          return result
     }
     async adicionar(livro) {
          if (!livro.isbn) {
               throw new AppError("Insira o isbn do livro",400);
               
          }
          if (!livro.titulo) {
               throw new AppError("Insira o titulo do livro",400);
               
          }
          if (!livro.ano_publicacao) {
               throw new AppError("Insira o ano de publicacao do livro",400);
               
          }
          if (!livro.edicao) {
               throw new AppError("Insira a edicao do livro",400);
               
          }
          if (!livro.editora) {
               throw new AppError("Insira a editora do livro",400);
               
          }
          if (!livro.categoria_id) {
               throw new AppError("Insira a categoria do livro",400);
               
          }
          if (!livro.descricao) {
               throw new AppError("Insira a descricao do livro",400);
               
          }
          if (!livro.autor_id) {
               throw new AppError("Insira o autor do livro",400);
               
          }

          const verificarIsbn = await this.livro_repositories.buscarPorIsbn(livro)

          if (verificarIsbn) {
               throw new AppError("Já existe uma livro com esse isbn",400);
               
          }

          const result = await this.livro_repositories.adicionar(livro)

          return result
     }
     async atualizar(livro) {
          if (!livro.id) {
               throw new AppError("Insira o id do livro",400);
               
          }
          
          const verificarId = await this.livro_repositories.buscarPorId(livro)
          
          if (!verificarId) {
               throw new AppError("Nenhuma livro com esse id encontrado",400);
               
          }
          
          const verificarIsbn = await this.livro_repositories.buscarPorIsbn(livro)
          
          if (verificarIsbn && verificarIsbn.id != livro.id) {
               throw new AppError("Ja existe uma livro com esse nome",400);
               
          }

          const result = await this.livro_repositories.atualizar(livro)

          return result
     }
     async arquivar(livro) {
          if (!livro.id) {
               throw new AppError("Insira o id do livro",400);
               
          }
          
          const verificarId = await this.livro_repositories.buscarPorId(livro)
          
          if (!verificarId) {
               throw new AppError("Nenhuma livro com esse id encontrado",400);
               
          }
          
          const verificarEmprestimosAtivos = await this.livro_repositories.buscarEmprestimosAtivos({id: verificarId.livro_id})

          if (verificarEmprestimosAtivos) {
               throw new AppError("Esse livro possui emprestimos ativos",400);
               
          }

          const result = await this.livro_repositories.arquivar(livro)

          return result
     }
     async deletar(livro) {
          if (!livro.id) {
               throw new AppError("Insira o id do livro",400);
               
          }
          
          const verificarEmprestimos = await this.livro_repositories.buscarEmprestimos(livro)
          
          if (verificarEmprestimos) {
               throw new AppError("Esse livro possui historico de emprestimos",400);
               
          }

          const result = await this.livro_repositories.deletar(livro)

          return result
     }
}

export default LivroServices