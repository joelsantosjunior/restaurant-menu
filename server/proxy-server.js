import express from 'express'
import request from 'request'

const app = express()

app.get('/proxy', (req, res) => {
  const url = req.query.url
  request(url, (error, response, body) => {
    if (error) {
      return res.status(500).send(error)
    }
    res.send(body)
  })
})

app.listen(3222, () => {
  console.log('Server running on port 3222')
})
