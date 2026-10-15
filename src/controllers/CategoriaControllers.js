import CategoriaServices from '../services/CategoriaServices.js'

class CategoriaControllers {
     constructor() {
          this.categoria_services = new CategoriaServices()
     }

     visualizar = async (req,res) => {
          const result = await this.categoria_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const categoria = {
               id
          }

          const result = await this.categoria_services.buscarPorId(categoria)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {nome,descricao} = req.body

          const categoria = {
               nome,
               descricao
          }

          const result = await this.categoria_services.adicionar(categoria)

          res.status(201).json({
               "message": "Categoria adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {nome,descricao} = req.body

          const categoria = {
               id,
               nome,
               descricao
          }

          const result = await this.categoria_services.atualizar(categoria)

          res.status(201).json({
               "message": "Categoria atualizado com sucesso",
               result
          })
     }
     arquivar = async (req,res) => {
          const id = req.params.id

          const categoria = {
               id
          }

          const result = await this.categoria_services.arquivar(categoria)

          res.status(201).json({
               "message": "Status da categoria alterado com sucesso",
               result
          })
     }
}

export default CategoriaControllers