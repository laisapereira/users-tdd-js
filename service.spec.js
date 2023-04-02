const { createUser } = require ('./service.js')
// testando uma função - testando o retorno dela
describe ('Service', () => {
    it ('Deve retornar o usuário criado', () => {
      expect(createUser({
        nome: 'João da Silvaaaa',
        email: 'alajs@dev.br'
      })).toMatchObject({
        nome: 'João da Silvaaaa',
        email: 'alajs@dev.br'
      })
    })
})

