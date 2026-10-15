import express from 'express'
import UsuarioControllers from '../controllers/UsuarioControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const UsuarioRoutes = express.Router()
const usuario_controllers = new UsuarioControllers()

UsuarioRoutes.get('/',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, expressAsyncHandler(usuario_controllers.visualizar))
UsuarioRoutes.get('/:id',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, expressAsyncHandler(usuario_controllers.buscarPorId))
UsuarioRoutes.post('/',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.adicionar))
UsuarioRoutes.put('/:id',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.atualizar))
UsuarioRoutes.patch('/:id',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.arquivar))
UsuarioRoutes.delete('/:id',/* #swagger.tags = ['Usuarios'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.deletar))

export default UsuarioRoutes