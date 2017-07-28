const CONCURRENCY = process.env.WEB_CONCURRENCY || 1
const PORT = process.env.PORT || 8080

const express = require("express")
const morgan = require('morgan')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the Train Time app.')
})

app.post('/trains', (req, res) => {
  if (!req.body) return res.json({ 'error': 'No request body present' })
  console.log(JSON.stringify(req.body, null, 2))

  const responseBody = {
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": "<speak>The next Southbound Brown Line Train should arrive at the <phoneme alphabet='ipa' ph='dɛmen'>Damen station in 11 minutes</speak>"
      }
    },
    "shouldEndSession": true
  }

  res.json(responseBody)
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`)
})
