import prisma from '../database/prisma.js'

class EmprestimoRepositories {
     async visualizar(){
          const result = await prisma.emprestimo_exemplar.findMany({
               include: {
                    emprestimo: {
                         include: {
                              usuario_emprestimo_usuario_idTousuario: {
                                   select: {
                                        id: true,
                                        nome: true,
                                        email: true
                                   }
                              }
                         }
                    },
                    exemplar: {
                         include: {
                              livro: {
                                   include: {
                                        categoria: true
                                   }
                              }
                         }
                    }
               }
          })

          return result
     }
     async buscarPorId(emprestimo){
          const result = await prisma.emprestimo_exemplar.findUnique({
               where: {
                    id: emprestimo.id
               },
               include: {
                    emprestimo: {
                         include: {
                              usuario_emprestimo_usuario_idTousuario: {
                                   select: {
                                        id: true,
                                        nome: true,
                                        email: true
                                   }
                              }
                         }
                    },
                    exemplar: {
                         include: {
                              livro: {
                                   include: {
                                        categoria: true
                                   }
                              }
                         }
                    }
               }
          })

          return result
     }
     async buscarPorExemplarDisponivel(emprestimo) {
          const result = await prisma.exemplar.findUnique({
               where: {
                    id: emprestimo.exemplar_id
               }
          })

          return result
     }
     async alterarStatus() {
          const result = await prisma.emprestimo.updateMany({
               where: {
                    status: 'em aberto',
                    data_devolucao_prev: {
                         lt: new Date()
                    }
               },
               data: {
                    status: 'em atraso'
               }
          })

          return result
     }
     async adicionar(emprestimo){
          const result = await prisma.$transaction(async(fx) => {
               const empres = await fx.emprestimo.create({
                    data: {
                         usuario_id: emprestimo.usuario_id,
                         funcionario_id: emprestimo.funcionario_id
                    }
               })

               const emprestimo_exemplar = await fx.emprestimo_exemplar.create({
                    data: {
                         emprestimo_id: empres.id,
                         exemplar_id: emprestimo.exemplar_id
                    },
                    include: {
                    emprestimo: {
                         include: {
                              usuario_emprestimo_usuario_idTousuario: {
                                   select: {
                                        id: true,
                                        nome: true,
                                        email: true
                                   }
                              }
                         }
                    },
                    exemplar: {
                         include: {
                              livro: {
                                   include: {
                                        categoria: true
                                   }
                              }
                         }
                    }
               }
               })

               return emprestimo_exemplar
          })

          return result
     }
}

export default EmprestimoRepositories