import AppError from '../errors/AppError.js';
import UsuarioRepositories from '../repositories/UsuarioRepositories.js'
import 'dotenv/config'

class UsuarioServices {
     constructor() {
          this.usuario_repositories = new UsuarioRepositories()
     }

     async visualizar() {
         const result = await this.usuario_repositories.visualizar() 

         return result
     }
     async buscarPorId(usuario) {
          const result = await this.usuario_repositories.buscarPorId(usuario)

          if (!result) {
               throw new AppError("Nenhuma usuario com esse id encontrado",404);
               
          }

          return result
     }
     async adicionar(usuario) {
          if (!usuario.nome) {
               throw new AppError("Insira o nome do usuario",400);
               
          }
          if (!usuario.cpf) {
               throw new AppError("Insira o cpf do usuario",400);
               
          }
          if (!usuario.email) {
               throw new AppError("Insira o email do usuario",400);
               
          }
          if (!usuario.senha) {
               throw new AppError("Insira a senha do usuario",400);
               
          }
          if (!usuario.telefone) {
               throw new AppError("Insira o telefone do usuario",400);
               
          }
          if (!usuario.data_nascimento) {
               throw new AppError("Insira o data de nascimento do usuario",400);
               
          }
          if (!usuario.endereco) {
               throw new AppError("Insira o endereco do usuario",400);
               
          }
          if (!usuario.perfil) {
               throw new AppError("Insira o perfil do usuario",400);
               
          }
          if (isNaN(usuario.cpf)) {
               throw new AppError("O cpf do usuario deve conter apenas digitos",400);
               
          }
          if (usuario.cpf.length != 11) {
               throw new AppError("O cpf do usuario deve conter 11 caracteres",400);
               
          }

          const verificarCpf = await this.usuario_repositories.buscarPorCpf(usuario)

          if (verificarCpf) {
               throw new AppError("Já existe uma usuario com esse cpf",400);
               
          }

          const verificarEmail = await this.usuario_repositories.buscarPorEmail(usuario)

          if (verificarEmail) {
               throw new AppError("Já existe uma usuario com esse email",400);
               
          }

          const result = await this.usuario_repositories.adicionar(usuario)

          return result
     }
     async atualizar(usuario) {
          if (!usuario.id) {
               throw new AppError("Insira o id do usuario",400);
               
          }
          if (usuario.cpf) {
               if (isNaN(usuario.cpf)) {
                    throw new AppError("O cpf do usuario deve conter apenas digitos",400);
                    
               }
               if (usuario.cpf.length != 11) {
                    throw new AppError("O cpf do usuario deve conter 11 caracteres",400);
                    
               }
          }
          
          const verificarId = await this.usuario_repositories.buscarPorId(usuario)
          
          if (!verificarId) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }
          
          const verificarCpf = await this.usuario_repositories.buscarPorCpf(usuario)
          
          if (verificarCpf && verificarCpf.id != usuario.id) {
               throw new AppError("Ja existe uma usuario com esse cpf",400);
               
          }
          
          const verificarEmail = await this.usuario_repositories.buscarPorEmail(usuario)
          
          if (verificarEmail && verificarEmail.id != usuario.id) {
               throw new AppError("Ja existe uma usuario com esse email",400);
               
          }

          const result = await this.usuario_repositories.atualizar(usuario)

          return result
     }
     async arquivar(usuario) {
          if (!usuario.id) {
               throw new AppError("Insira o id do usuario",400);
               
          }
          
          const verificarId = await this.usuario_repositories.buscarPorId(usuario)
          
          if (!verificarId) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }
          
          const verificarEmprestimosAtivos = await this.usuario_repositories.buscarEmprestimosAtivos(usuario)
          
          if (verificarEmprestimosAtivos) {
               throw new AppError("Esse usuario possui emprestimos ativos",400);
               
          }

          const result = await this.usuario_repositories.arquivar(usuario)

          return result
     }
     async deletar(usuario) {
          if (!usuario.id) {
               throw new AppError("Insira o id do usuario",400);
               
          }
          
          const verificarId = await this.usuario_repositories.buscarPorId(usuario)
          
          if (!verificarId) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }

          const verificarEmprestimos = await this.usuario_repositories.buscarEmprestimos(usuario)
          
          if (verificarEmprestimos) {
               throw new AppError("Esse usuario possui historico de emprestimos",400);
               
          }

          const result = await this.usuario_repositories.deletar(usuario)

          return result
     }
}

export default UsuarioServices