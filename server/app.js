const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('TwitSplit Server is on.')
})

app.listen(4000, function () {
  console.log('TwitSplit is listening on port 4000.')
})
