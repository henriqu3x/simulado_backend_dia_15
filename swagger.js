import swaggerAutoGen from 'swagger-autogen'

const options = {
     openapi:'3.0.0'
}

const docs = {
     info: {
          title: 'Saber+ biblioteca',
          description: 'Documentação da api',
          version: '1.0.0'
     },

     servers: [
          {
               url: 'http://localhost:3000/api/v1'
          }
     ],

     tags: [
          {
               name: 'Auth',
               description: 'Autenticação'
          },
          {
               name: 'Usuarios',
               description: 'Gerenciamento de usuarios'
          },
          {
               name: 'Autores',
               description: 'Gerenciamento de autores'
          },
          {
               name: 'Categorias',
               description: 'Gerenciamento de categorias'
          },
          {
               name: 'Livros',
               description: 'Gerenciamento de livros'
          },
          {
               name: 'Exemplares',
               description: 'Gerenciamento de exemplares'
          },
          {
               name: 'Emprestimos',
               description: 'Gerenciamento de emprestimos'
          },
          {
               name: 'Devoluções',
               description: 'Gerenciamento de devoluções'
          }
     ],

     components: {
          securitySchemes: {
               bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    format: 'JWT'
               }
          }
     },

     security: [
          {
               bearerAuth: []
          }
     ]
}

const outputFIle = './swagger-output.json'

const endPointFiles = ['./src/routes/index.js']

swaggerAutoGen(options)(outputFIle,endPointFiles,docs)