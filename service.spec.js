const { createUser
} = require('./service.js')
const { randomUUID } = require('crypto')
// testando uma função - testando o retorno dela
describe ('Service', () => {
    it ('Deve retornar o usuário criado', () => {
      const response = createUser({
        nome: 'João da Silvaaaa',
        email: 'alajs@dev.br'
      })
      expect(response).toMatchObject({
        id: expect.any(String),
        nome: 'João da Silvaaaa',
        email: 'alajs@dev.br'
      })
    })
})

