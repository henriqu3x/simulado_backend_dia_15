import DevolucaoServices from '../services/DevolucaoServices.js'

class DevolucaoControllers {
     constructor() {
          this.devolucao_services = new DevolucaoServices()
     }

     visualizar = async (req,res) => {
          const result = await this.devolucao_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const devolucao = {
               id
          }

          const result = await this.devolucao_services.buscarPorId(devolucao)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {emprestimo_id,funcionario_id,situacao} = req.body

          const devolucao = {
               emprestimo_id,
               funcionario_id,
               situacao
          }

          const result = await this.devolucao_services.adicionar(devolucao)

          res.status(201).json({
               "message": "devolucao adicionado com sucesso",
               result
          })
     }
}

export default DevolucaoControllers