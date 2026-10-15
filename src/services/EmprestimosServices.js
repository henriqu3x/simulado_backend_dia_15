import AppError from '../errors/AppError.js';
import EmprestimoRepositories from '../repositories/EmprestimoRepositories.js'
import 'dotenv/config'

class EmprestimosServices {
     constructor() {
          this.emprestimo_repositories = new EmprestimoRepositories()
     }

     async visualizar() {
          await this.emprestimo_repositories.alterarStatus()

         const result = await this.emprestimo_repositories.visualizar() 

         return result
     }
     async buscarPorId(emprestimo) {
          const result = await this.emprestimo_repositories.buscarPorId(emprestimo)

          if (!result) {
               throw new AppError("Nenhuma emprestimo com esse id encontrado",404);
               
          }

          return result
     }
     async adicionar(emprestimo) {
          if (!emprestimo.usuario_id) {
               throw new AppError("Insira o usuario do emprestimo",400);
               
          }
          if (!emprestimo.funcionario_id) {
               throw new AppError("Insira o funcionario do emprestimo",400);
               
          }
          if (!emprestimo.exemplar_id) {
               throw new AppError("Insira o exemplar do emprestimo",400);
               
          }

          const verificarDisponibilidadeExemplar = await this.emprestimo_repositories.buscarPorExemplarDisponivel(emprestimo)

          if (!verificarDisponibilidadeExemplar) {
               throw new AppError("O exemplar não esta disponivel",400);
               
          }

          const result = await this.emprestimo_repositories.adicionar(emprestimo)

          return result
     }
}

export default EmprestimosServices