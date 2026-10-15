const AdminMiddlewares = (req,res,next) => {
     try {
          const perfil = req.user?.perfil

          if (perfil != 'admin') {
               return res.status(403).json({
                    "error": "Voce não tem autorização para realizar essa ação"
               })
          }

          next()
     } catch (error) {
          return res.status(403).json({
               "error": error.message
          })
     }
}

export default AdminMiddlewares