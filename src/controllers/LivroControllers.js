import LivroServices from '../services/LivroServices.js'

class LivroControllers {
     constructor() {
          this.livro_services = new LivroServices()
     }

     visualizar = async (req,res) => {
          const result = await this.livro_services.visualizar()

          res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const livro = {
               id
          }

          const result = await this.livro_services.buscarPorId(livro)

          res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {isbn,titulo,ano_publicacao,edicao,editora,categoria_id,descricao,autor_id} = req.body

          const livro = {
               isbn,
               titulo,
               ano_publicacao,
               edicao,
               editora,
               categoria_id,
               descricao,
               autor_id
          }

          const result = await this.livro_services.adicionar(livro)

          res.status(201).json({
               "message": "livro adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {isbn,titulo,ano_publicacao,edicao,editora,categoria_id,descricao,autor_id} = req.body

          const livro = {
               id,
               isbn,
               titulo,
               ano_publicacao,
               edicao,
               editora,
               categoria_id,
               descricao,
               autor_id
          }

          const result = await this.livro_services.atualizar(livro)

          res.status(201).json({
               "message": "livro atualizado com sucesso",
               result
          })
     }
     arquivar = async (req,res) => {
          const id = req.params.id

          const livro = {
               id
          }

          const result = await this.livro_services.arquivar(livro)

          res.status(201).json({
               "message": "Status da livro alterado com sucesso",
               result
          })
     }
     deletar = async (req,res) => {
          const id = req.params.id

          const livro = {
               id
          }

          const result = await this.livro_services.deletar(livro)

          res.status(201).json({
               "message": "Livro deletado com sucesso",
               result
          })
     }
}

export default LivroControllers