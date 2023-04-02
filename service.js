
const users = [
  {
    nome: 'Laisa Pereira',
    email: 'laisa@pereira.dev'
  },
  {
    nome: 'João da Silva',
    email: 'joaosilva@jao.dev'
  },

  {
    nome: 'Maria da Silva',
    email: 'maria@silva.dev'
  }
]

const createUser = (user) => {
  users.push(user)
  console.log(users)
  return user
}

module.exports = {createUser}