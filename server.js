const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;
import express from 'express'
const app = express()

app.get('/', (request, response) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
