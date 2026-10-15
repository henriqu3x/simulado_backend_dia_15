import prisma from '../database/prisma.js'

class UsuarioRepositories {
     async visualizar(){
          const result = await prisma.usuario.findMany({
               select: {
                    id: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    data_cadastro: true,
                    data_nascimento: true,
                    endereco: true,
                    perfil: true,
                    ativo: true
               }
          })

          return result
     }
     async buscarPorId(usuario){
          const result = await prisma.usuario.findUnique({
               where: {
                    id: usuario.id
               },
               select: {
                    id: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    data_cadastro: true,
                    data_nascimento: true,
                    endereco: true,
                    perfil: true,
                    ativo: true
               }
          })

          return result
     }
     async buscarPorCpf(usuario){
          const result = await prisma.usuario.findUnique({
               where: {
                    cpf: usuario.cpf
               }
          })

          return result
     }
     async buscarPorEmail(usuario){
          const result = await prisma.usuario.findUnique({
               where: {
                    email: usuario.email
               }
          })

          return result
     }
     async buscarEmprestimosAtivos(usuario) {
          const result = await prisma.emprestimo.findFirst({
               where: {
                    usuario_id: usuario.id,
                    status: {
                         in: ['em aberto', 'em atraso']
                    }
               }
          })

          return result
     }
     async buscarEmprestimos(usuario) {
          const result = await prisma.emprestimo.findFirst({
               where: {
                    usuario_id: usuario.id
               }
          })

          return result
     }
     async adicionar(usuario){
          const result = await prisma.usuario.create({
               data: {
                    nome: usuario.nome,
                    cpf: usuario.cpf,
                    email: usuario.email,
                    senha: usuario.senha,
                    telefone: usuario.telefone,
                    data_nascimento: new Date(usuario.data_nascimento),
                    endereco: usuario.endereco,
                    perfil: usuario.perfil
               },
               select: {
                    id: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    data_cadastro: true,
                    data_nascimento: true,
                    endereco: true,
                    perfil: true,
                    ativo: true
               }
          })

          return result
     }
     async atualizar(usuario){
          const result = await prisma.usuario.update({
               where: {
                    id: usuario.id
               },
               data: {
                    nome: usuario.nome,
                    cpf: usuario.cpf,
                    email: usuario.email,
                    senha: usuario.senha,
                    telefone: usuario.telefone,
                    data_nascimento: new Date(usuario.data_nascimento),
                    endereco: usuario.endereco,
                    perfil: usuario.perfil
               },
               select: {
                    id: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    data_cadastro: true,
                    data_nascimento: true,
                    endereco: true,
                    perfil: true,
                    ativo: true
               }
          })

          return result
     }
     async arquivar(usuario){
          const result = await prisma.$transaction(async(fx) => {
               const atual = await fx.usuario.findUnique({
                    where: {
                         id: usuario.id
                    }
               })

               const novo = await fx.usuario.update({
                    where: {
                         id: usuario.id
                    },
                    data: {
                         ativo: !atual.ativo
                    },
                    select: {
                         id: true,
                         nome: true,
                         cpf: true,
                         email: true,
                         telefone: true,
                         data_cadastro: true,
                         data_nascimento: true,
                         endereco: true,
                         perfil: true,
                         ativo: true
                    }
               })

               return novo
          })

          return result
     }
     async deletar(usuario) {
          const result = await prisma.usuario.delete({
               where: {
                    id: usuario.id
               },
               select: {
                    id: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    data_cadastro: true,
                    data_nascimento: true,
                    endereco: true,
                    perfil: true,
                    ativo: true
               }
          })

          return result
     }
}

export default UsuarioRepositories