const express = require("express");
const app = express();

const cors = require('cors')
const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");
const chalk = require("chalk");
const log = console.log;

app.use(bodyParser.json());
app.use(cors())

const PORT = 5000;

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    res.status(200).send(commentsByPostId[req.params.id] || [])
    
});

app.post("/posts/:id/comments", (req, res) => {
  const commentID = randomBytes(4).toString("hex");
  const { title, text } = req.body;

  const comments = commentsByPostId[req.params.id] || []

  comments.push({id: commentID, title, text})

  commentsByPostId[req.params.id] = comments

  res.status(201).send(comments)

});

app.listen(PORT, () => {
  log(chalk.inverse.green("Comments is runing on port : " + PORT + " "));
});
