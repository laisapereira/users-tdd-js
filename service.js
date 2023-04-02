const { randomUUID } = require('crypto')

const users = [
  {
    id: randomUUID(),
    nome: 'Laisa Pereira',
    email: 'laisa@pereira.dev'
  },
  {
    id: randomUUID(),
    nome: 'João da Silva',
    email: 'joaosilva@jao.dev'
  },

  {
    id: randomUUID(),
    nome: 'Maria da Silva',
    email: 'maria@silva.dev'
  }
]

const addUser = (user) => users.push(user)

const createUser = (user) => {
  const newUser = {
    ...user,
    id: randomUUID()
  }
  addUser(newUser)
  return newUser 
}

module.exports = { createUser, addUser }