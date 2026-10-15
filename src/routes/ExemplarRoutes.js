import express from 'express'
import ExemplarControllers from '../controllers/ExemplarControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const ExemplarRoutes = express.Router()
const exemplar_controllers = new ExemplarControllers()

ExemplarRoutes.get('/',/* #swagger.tags = ['Exemplares'] */ AuthMiddlewares, expressAsyncHandler(exemplar_controllers.visualizar))
ExemplarRoutes.get('/:id',/* #swagger.tags = ['Exemplares'] */ AuthMiddlewares, expressAsyncHandler(exemplar_controllers.buscarPorId))
ExemplarRoutes.post('/',/* #swagger.tags = ['Exemplares'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.adicionar))
ExemplarRoutes.put('/:id',/* #swagger.tags = ['Exemplares'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.atualizar))
ExemplarRoutes.patch('/:id',/* #swagger.tags = ['Exemplares'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.arquivar))

export default ExemplarRoutes