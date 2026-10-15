import prisma from '../database/prisma.js'

class DevolucaoRepositories {
     async visualizar(){
          const result = await prisma.devolucao.findMany()

          return result
     }
     async buscarPorId(devolucao){
          const result = await prisma.devolucao.findUnique({
               where: {
                    id: devolucao.id
               }
          })

          return result
     }
     async adicionar(devolucao){
          const result = await prisma.devolucao.create({
               data: {
                    emprestimo_id: devolucao.emprestimo_id,
                    funcionario_id: devolucao.funcionario_id,
                    situacao: devolucao.situacao
               }
          })

          return result
     }
}

export default DevolucaoRepositories