import ExemplarServices from '../services/ExemplarServices.js'

class ExemplarControllers {
     constructor() {
          this.exemplar_services = new ExemplarServices()
     }

     visualizar = async (req,res) => {
          const result = await this.exemplar_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const exemplar = {
               id
          }

          const result = await this.exemplar_services.buscarPorId(exemplar)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {cod_identificacao,livro_id,data_aquisicao,estado_conservacao,status} = req.body

          const exemplar = {
               cod_identificacao,
               livro_id,
               data_aquisicao,
               estado_conservacao,
               status
          }

          const result = await this.exemplar_services.adicionar(exemplar)

          res.status(201).json({
               "message": "exemplar adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {cod_identificacao,livro_id,data_aquisicao,estado_conservacao,status} = req.body

          const exemplar = {
               id,
               cod_identificacao,
               livro_id,
               data_aquisicao,
               estado_conservacao,
               status
          }

          const result = await this.exemplar_services.atualizar(exemplar)

          res.status(201).json({
               "message": "exemplar atualizado com sucesso",
               result
          })
     }
     arquivar = async (req,res) => {
          const id = req.params.id

          const exemplar = {
               id
          }

          const result = await this.exemplar_services.arquivar(exemplar)

          res.status(201).json({
               "message": "Status da exemplar alterado com sucesso",
               result
          })
     }
}

export default ExemplarControllers