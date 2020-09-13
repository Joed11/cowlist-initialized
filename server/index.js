const express = require('express')
const app = express()
const port = 8080
const models = require('./models')
const bodyParse = require('body-parser')
const morgan = require('morgan')

app.use(express.static('./client/dist'))
app.use(bodyParse.json())
app.use(morgan(':method :url :status :res[content-length] :req[header] - :response-time ms'))


app.set('views', `../client/dist`);

app.get('/', (req, res) => {
  res.render('Hello World')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Create One All
app.post('/api/cows', (req, res) => {
  console.log(req.body)
  return models.cows.create(req, res)
    .catch((error) => {
      console.log('ERROR')
    })
})

//Read All
app.get('/api/cows', (req, res) => {
  return models.cows.getAll(req, res)
    .catch((error) => {
      console.log('ERROR')
    })
})

