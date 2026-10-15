import prisma from '../database/prisma.js'

class AuthRepositories {
     async buscarPorEmail(usuario) {
          const result = await prisma.usuario.findUnique({
               where: {
                    email: usuario.email
               }
          })

          return result
     }
}

export default AuthRepositories