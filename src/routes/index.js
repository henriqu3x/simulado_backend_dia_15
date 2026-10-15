import express from 'express'
import AuthRoutes from './AuthRoutes.js'
import CategoriaRoutes from './CategoriaRoutes.js'
import UsuarioRoutes from './UsuarioRoutes.js'
import AutorRoutes from './AutorRoutes.js'
import LivroRoutes from './LivroRoutes.js'
import ExemplarRoutes from './ExemplarRoutes.js'
import EmprestimosRoutes from './EmprestimosRoutes.js'
import DevolucaoRoutes from './DevolucaoRoutes.js'

const Routes = express.Router()

Routes.use(AuthRoutes)
Routes.use('/usuarios', UsuarioRoutes)
Routes.use('/autores', AutorRoutes)
Routes.use('/categorias', CategoriaRoutes)
Routes.use('/livros', LivroRoutes)
Routes.use('/exemplares', ExemplarRoutes)
Routes.use('/emprestimos', EmprestimosRoutes)
Routes.use('/devolucoes', DevolucaoRoutes)

export default Routes