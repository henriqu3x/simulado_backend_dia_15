import AuthServices from '../services/AuthServices.js'

class AuthControllers {
     constructor() {
          this.auth_services = new AuthServices()
     }

     login = async (req,res) => {
          const {email,senha} = req.body


          const usuario = {
               email,
               senha
          }

          const result = await this.auth_services.login(usuario)

          res.status(200).json({
               "message": "Usuario logado com sucesso",
               result
          })
     }
}

export default AuthControllers