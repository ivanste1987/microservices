const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')


const chalk = require("chalk");
const log = console.log;

const app = express()
app.use(bodyParser.json())

const PORT = 6000


app.post("/events", async (req, res) => {
  const event = req.body;
  log(event)
  //posts 
  await axios.post('http://localhost:4000/events', event).catch((err) => {
    log(chalk.inverse.red(err.message + " PORT 4000"));
  });
  //comments
  await axios.post('http://localhost:5000/events', event).catch((err) => {
    log(chalk.inverse.red(err.message + " PORT 5000"));
  });
  //queri service
  await axios.post('http://localhost:9000/events', event).catch((err) => {
    log(chalk.inverse.red(err.message + " PORT 9000"));
  });

  res.send({
    status: "OK"
  })
})



app.listen(PORT, () => {
  log(chalk.inverse.green("Server is runing on port: " + PORT + " "));
})