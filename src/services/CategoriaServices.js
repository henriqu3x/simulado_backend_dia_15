import AppError from '../errors/AppError.js';
import CategoriaRepositories from '../repositories/CategoriaRepositories.js'
import 'dotenv/config'

class AuthServices {
     constructor() {
          this.categoria_repositories = new CategoriaRepositories()
     }

     async visualizar() {
         const result = await this.categoria_repositories.visualizar() 

         return result
     }
     async buscarPorId(categoria) {
          const result = await this.categoria_repositories.buscarPorId(categoria)

          if (!result) {
               throw new AppError("Nenhuma categoria com esse id encontrado",404);
               
          }

          return result
     }
     async adicionar(categoria) {
          if (!categoria.nome) {
               throw new AppError("Insira o nome da categoria",400);
               
          }
          if (!categoria.descricao) {
               throw new AppError("Insira a descricao da categoria",400);
               
          }

          const verificarNome = await this.categoria_repositories.buscarPorNome(categoria)

          if (verificarNome) {
               throw new AppError("Já existe uma categoria com esse nome",400);
               
          }

          const result = await this.categoria_repositories.adicionar(categoria)

          return result
     }
     async atualizar(categoria) {
          if (!categoria.id) {
               throw new AppError("Insira o id da categoria",400);
               
          }
          
          const verificarId = await this.categoria_repositories.buscarPorId(categoria)
          
          if (!verificarId) {
               throw new AppError("Nenhuma categoria com esse id encontrado",400);
               
          }
          
          const verificarNome = await this.categoria_repositories.buscarPorNome(categoria)
          
          if (verificarNome && verificarNome.id != categoria.id) {
               throw new AppError("Ja existe uma categoria com esse nome",400);
               
          }

          const result = await this.categoria_repositories.atualizar(categoria)

          return result
     }
     async arquivar(categoria) {
          if (!categoria.id) {
               throw new AppError("Insira o id da categoria",400);
               
          }
          
          const verificarId = await this.categoria_repositories.buscarPorId(categoria)
          
          if (!verificarId) {
               throw new AppError("Nenhuma categoria com esse id encontrado",400);
               
          }

          const result = await this.categoria_repositories.arquivar(categoria)

          return result
     }
}

export default AuthServices