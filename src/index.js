const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: "Tests de lint e testdsssss coms ss statan" })
})

app.listen(3333, () => console.log('Server running on port 3333'))
