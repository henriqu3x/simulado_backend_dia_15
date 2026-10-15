import UsuarioServices from '../services/UsuarioServices.js'

class UsuarioControllers {
     constructor() {
          this.usuario_services = new UsuarioServices()
     }

     visualizar = async (req,res) => {
          const result = await this.usuario_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const usuario = {
               id
          }

          const result = await this.usuario_services.buscarPorId(usuario)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {nome,cpf,email,senha,telefone,data_nascimento,endereco,perfil} = req.body

          const usuario = {
               nome,
               cpf,
               email,
               senha,
               telefone,
               data_nascimento,
               endereco,
               perfil
          }

          const result = await this.usuario_services.adicionar(usuario)

          res.status(201).json({
               "message": "usuario adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {nome,cpf,email,senha,telefone,data_nascimento,endereco,perfil} = req.body

          const usuario = {
               id,
               nome,
               cpf,
               email,
               senha,
               telefone,
               data_nascimento,
               endereco,
               perfil
          }

          const result = await this.usuario_services.atualizar(usuario)

          res.status(201).json({
               "message": "usuario atualizado com sucesso",
               result
          })
     }
     arquivar = async (req,res) => {
          const id = req.params.id

          const usuario = {
               id
          }

          const result = await this.usuario_services.arquivar(usuario)

          res.status(201).json({
               "message": "Status da usuario alterado com sucesso",
               result
          })
     }
     deletar = async (req,res) => {
          const id = req.params.id

          const usuario = {
               id
          }

          const result = await this.usuario_services.deletar(usuario)

          res.status(201).json({
               "message": "usuario deletado com sucesso",
               result
          })
     }
}

export default UsuarioControllers