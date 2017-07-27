const CONCURRENCY = process.env.WEB_CONCURRENCY || 1
const PORT = process.env.PORT || 8080

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (req, res) => {
  res.send('Welcome to the Train Time app.')
})

app.post('/trains', (req, res) => {
  if (!req.body) return res.json({ 'error': 'No request body present' })
  console.log(`req.headers['content-type'] = ${req.headers['content-type']}`)
  console.log(`req.body.test=${req.body.test}`)
  res.json({ 'req_body': `${req.body}` })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
