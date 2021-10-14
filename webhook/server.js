const express = require('express')
const mogan = require('morgan')
const app = express()

const {
  PORT = 3000
} = process.env

app.use(mogan('dev'))
app.use(express.json())
app.use((req, res) => {
  res.end()
  console.log(req.headers, req.body)
})

app.listen(PORT, () => {
  console.log(`listening on :${PORT}`)
});

['SIGINT', 'SIGTERM'].forEach(sig => {
  process.on(sig, () => {
    console.log(`signal ${sig} received, exit`)
    process.exit()
  })
})
