import express from 'express'
import ErrorHandler from './src/middlewares/ErrorHandler.js'
import Routes from './src/routes/index.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger-output.json' with {type: 'json'}

const app = express()
const port = 3000
const prefix_url = '/api/v1'

app.use(express.json())
app.use(cors())
app.use(`${prefix_url}/api-docs`,swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get('/', (req,res) => {
     res.status(200).json({
          "message": "API ONLINE"
     })
})

app.use(prefix_url, Routes)

app.use((req,res) => {
     res.status(404).json({
          "error": "Rota não encontrada"
     })
})

app.use(ErrorHandler)

app.listen(port, () => {
     console.log(`Servidor rodando na porta ${port}`)
})