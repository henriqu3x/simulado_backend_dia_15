import AutorServices from '../services/AutorServices.js'

class AutorControllers {
     constructor() {
          this.autor_services = new AutorServices()
     }

     visualizar = async (req,res) => {
          const result = await this.autor_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const autor = {
               id
          }

          const result = await this.autor_services.buscarPorId(autor)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {nome,nascionalidade,data_nascimento} = req.body

          const autor = {
               nome,
               nascionalidade,
               data_nascimento
          }

          const result = await this.autor_services.adicionar(autor)

          res.status(201).json({
               "message": "autor adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {nome,nascionalidade,data_nascimento} = req.body

          const autor = {
               id,
               nome,
               nascionalidade,
               data_nascimento
          }

          const result = await this.autor_services.atualizar(autor)

          res.status(201).json({
               "message": "autor atualizado com sucesso",
               result
          })
     }
     arquivar = async (req,res) => {
          const id = req.params.id

          const autor = {
               id
          }

          const result = await this.autor_services.arquivar(autor)

          res.status(201).json({
               "message": "Status da autor alterado com sucesso",
               result
          })
     }
}

export default AutorControllers