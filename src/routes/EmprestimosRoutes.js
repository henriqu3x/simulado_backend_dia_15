import express from 'express'
import EmprestimoControllers from '../controllers/EmprestimoControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const EmprestimosRoutes = express.Router()
const emprestimos_controllers = new EmprestimoControllers()

EmprestimosRoutes.get('/',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimos_controllers.visualizar))
EmprestimosRoutes.get('/:id',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimos_controllers.buscarPorId))
EmprestimosRoutes.post('/',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimos_controllers.adicionar))


export default EmprestimosRoutes