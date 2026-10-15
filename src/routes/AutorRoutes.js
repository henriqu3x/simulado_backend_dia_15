import express from 'express'
import AutorControllers from '../controllers/AutorControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const AutorRoutes = express.Router()
const autor_controllers = new AutorControllers()

AutorRoutes.get('/',/* #swagger.tags = ['Autores'] */ AuthMiddlewares, expressAsyncHandler(autor_controllers.visualizar))
AutorRoutes.get('/:id',/* #swagger.tags = ['Autores'] */ AuthMiddlewares, expressAsyncHandler(autor_controllers.buscarPorId))
AutorRoutes.post('/',/* #swagger.tags = ['Autores'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(autor_controllers.adicionar))
AutorRoutes.put('/:id',/* #swagger.tags = ['Autores'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(autor_controllers.atualizar))
AutorRoutes.patch('/:id',/* #swagger.tags = ['Autores'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(autor_controllers.arquivar))

export default AutorRoutes