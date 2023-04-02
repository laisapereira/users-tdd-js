const express = require('express')

const { createUser } = require ('./service.js')

const app = express()

const port = 3000;

app.use(express.json())

const users = []

app.post('/user', (req, res) => {
  const user = req.body
  createUser(user)
  res.status(201).json({data: user}
    
)});

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}` )
})