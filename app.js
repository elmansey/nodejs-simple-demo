const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello, Iam a demo nodejs app :D')
  })
  
  app.listen(port, () => {
    console.log(`app running and listening at ${port}`)
  })