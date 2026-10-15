import EmprestimosServices from '../services/EmprestimosServices.js'

class EmprestimoControllers {
     constructor() {
          this.emprestimo_services = new EmprestimosServices()
     }

     visualizar = async (req,res) => {
          const result = await this.emprestimo_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const emprestimo = {
               id
          }

          const result = await this.emprestimo_services.buscarPorId(emprestimo)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {usuario_id,funcionario_id,exemplar_id} = req.body

          const emprestimo = {
               usuario_id,
               funcionario_id,
               exemplar_id
          }

          const result = await this.emprestimo_services.adicionar(emprestimo)

          res.status(201).json({
               "message": "emprestimo adicionado com sucesso",
               result
          })
     }
}

export default EmprestimoControllers