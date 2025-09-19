const express = require('express')
const app = express()
const port = 3000

app.get('/api/message', (req, res) => {
  res.json({ id: 1, message: "Hello!" })
})

app.post('/api/message', (req, res) => {
  res.json({ id: 2, message: "Hey!" })
})

app.put('/api/message/:id', (req, res) => {
  const { id } = req.params
  const { message } = req.body
  res.json({ id, message: message || "Updated Hello!" })
})

app.delete('/api/message/:id', (req, res) => {
  const { id } = req.params
  res.json({ success: true, id, message: "Deleted" })
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


