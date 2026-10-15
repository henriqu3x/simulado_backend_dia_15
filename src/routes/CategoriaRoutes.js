import express from 'express'
import CategoriaControllers from '../controllers/CategoriaControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const CategoriaRoutes = express.Router()
const categoria_controllers = new CategoriaControllers()

CategoriaRoutes.get('/',/* #swagger.tags = ['Categorias'] */ AuthMiddlewares, expressAsyncHandler(categoria_controllers.visualizar))
CategoriaRoutes.get('/:id',/* #swagger.tags = ['Categorias'] */ AuthMiddlewares, expressAsyncHandler(categoria_controllers.buscarPorId))
CategoriaRoutes.post('/',/* #swagger.tags = ['Categorias'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.adicionar))
CategoriaRoutes.put('/:id',/* #swagger.tags = ['Categorias'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.atualizar))
CategoriaRoutes.patch('/:id',/* #swagger.tags = ['Categorias'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.arquivar))

export default CategoriaRoutes