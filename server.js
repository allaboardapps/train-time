const CONCURRENCY = process.env.WEB_CONCURRENCY || 1
const PORT = process.env.PORT || 8080

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('Welcome to the Train Time app.')
})

app.get('/trains', (request, response) => {
  response.send('Hello Trains!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
