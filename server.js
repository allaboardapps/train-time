const CONCURRENCY = process.env.WEB_CONCURRENCY || 1
const PORT = process.env.PORT || 8080

const express = require("express")
const morgan = require('morgan')
const bodyParser = require("body-parser")

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the Train Time app.')
})

app.post('/trains', (req, res) => {
  if (!req.body) return res.json({ 'error': 'No request body present' })
  console.log(JSON.stringify(req.body, null, 2))
  res.json(req.body)
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`)
})
