import prisma from '../database/prisma.js'

class ExemplarRepositories {
     async visualizar(){
          const result = await prisma.exemplar.findMany({
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    }
               }
          })

          return result
     }
     async buscarPorId(exemplar){
          const result = await prisma.exemplar.findUnique({
               where: {
                    id: exemplar.id
               },
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    }
               }
          })

          return result
     }
     async buscarPorIdentificacao(exemplar){
          const result = await prisma.exemplar.findUnique({
               where: {
                    cod_identificacao: exemplar.cod_identificacao
               }
          })

          return result
     }
     async adicionar(exemplar){
          const result = await prisma.exemplar.create({
               data: {
                    cod_identificacao: exemplar.cod_identificacao,
                    livro_id: exemplar.livro_id,
                    data_aquisicao: new Date(exemplar.data_aquisicao),
                    estado_conservacao: exemplar.estado_conservacao,
                    status: exemplar.status
               },
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    }
               }
          })

          return result
     }
     async atualizar(exemplar){
          const result = await prisma.exemplar.update({
               where: {
                    id: exemplar.id
               },
               data: {
                    cod_identificacao: exemplar.cod_identificacao,
                    livro_id: exemplar.livro_id,
                    data_aquisicao: new Date(exemplar.data_aquisicao),
                    estado_conservacao: exemplar.estado_conservacao,
                    status: exemplar.status
               },
               include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    }
               }
          })

          return result
     }
     async arquivar(exemplar){
          const result = await prisma.$transaction(async(fx) => {
               const atual = await fx.exemplar.findUnique({
                    where: {
                         id: exemplar.id
                    }
               })

               const novo = await fx.exemplar.update({
                    where: {
                         id: exemplar.id
                    },
                    data: {
                         ativo: !atual.ativo
                    },
                    include: {
                    livro: {
                         include: {
                              categoria: true
                         }
                    }
               }
               })

               return novo
          })

          return result
     }
}

export default ExemplarRepositories