const express = require('express')
const app = express()
const port = 3000
const models = require('./models')
const bodyParse = require('body-parser')

app.use(express.static('./client/dist'))
app.use(bodyParse.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/cows', (req, res) => {
  return models.cows.getAll(req, res)
    .catch((error) => {
      console.log('ERROR')
    })
})

app.post('/api/cows', (req, res) => {
  return models.cows.create(req, res)
    .catch((error) => {
      console.log('ERROR')
    })
})