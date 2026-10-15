import AppError from '../errors/AppError.js';
import DevolucaoRepositories from '../repositories/DevolucaoRepositories.js'
import 'dotenv/config'

class DevolucaoServices {
     constructor() {
          this.devolucao_repositories = new DevolucaoRepositories()
     }

     async visualizar() {
         const result = await this.devolucao_repositories.visualizar() 

         return result
     }
     async buscarPorId(devolucao) {
          const result = await this.devolucao_repositories.buscarPorId(devolucao)

          if (!result) {
               throw new AppError("Nenhuma devolucao com esse id encontrado",404);
               
          }

          return result
     }
     async adicionar(devolucao) {
          if (!devolucao.emprestimo_id) {
               throw new AppError("Insira o emprestimo da devolucao",400);
               
          }
          if (!devolucao.funcionario_id) {
               throw new AppError("Insira o funcionario da devolucao",400);
               
          }
          if (!devolucao.situacao) {
               throw new AppError("Insira a situacao da devolucao",400);
               
          }

          const result = await this.devolucao_repositories.adicionar(devolucao)

          return result
     }
}

export default DevolucaoServices