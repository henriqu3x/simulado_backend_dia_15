import express from 'express'
import LivroControllers from '../controllers/LivroControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const LivroRoutes = express.Router()
const livro_controllers = new LivroControllers()

LivroRoutes.get('/',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, expressAsyncHandler(livro_controllers.visualizar))
LivroRoutes.get('/:id',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, expressAsyncHandler(livro_controllers.buscarPorId))
LivroRoutes.post('/',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.adicionar))
LivroRoutes.put('/:id',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.atualizar))
LivroRoutes.patch('/:id',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.arquivar))
LivroRoutes.delete('/:id',/* #swagger.tags = ['Livros'] */ AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.deletar))

export default LivroRoutes