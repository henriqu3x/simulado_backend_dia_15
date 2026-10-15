
# Saber+ biblioteca

Sistema de gerenciamento de um acervo para biblioteca


## Tecnologias utilizadas

- Node
- Express
- ExpressAsyncHandler
- Bcrypt
- JsonWebToken
- Prisma
- Cors
- Swagger


## Variaveis de ambiente

Para executar esse projeto adicione essas variaveis no arquivo .env na raiz do projeto

`DATABASE_URL: url do banco de dados`

`JWT_SECRET: senha para gerar e verificar os tokens`


## Rodar localmente

Clone o projeto

```bash
  git clone https://link-to-project
```

Acesse o projeto no diretorio

```bash
  cd my-project
```

Instale as dependencias

```bash
  npm install
```
Execute esse comando se voce não tiver as tabelas criadas no banco de dados

```bash
  npx prisma db push
```
Se ja possui as tabelas criadas execute:

```bash
  npx prisma db pull
```
Execute esse comando para gerar os models

```bash
  npx prisma generate
```

Rode o servidor

```bash
  npm run dev
```


## Estrutura de pastas

Esse projeto esta organizado da seguinte forma

```bash
  /prisma
  /src
    /repositories
    /services
    /controllers
    /routes
    /middlewares
    /errors
    /database
    /models
```


## Documentação da api

#### Para acessar a documentação acesse o endpoint:

```http
  GET /api/v1/api-docs
```


