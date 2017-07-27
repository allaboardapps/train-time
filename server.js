const CONCURRENCY = process.env.WEB_CONCURRENCY || 1
const PORT = process.env.PORT || 8080

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the Train Time app.')
})

app.post('/trains', (req, res) => {
  if (!req.body) return res.json({ 'error': 'No request body present' })
  res.json({ 'data': `${req.body.test}` })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
