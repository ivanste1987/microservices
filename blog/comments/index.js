const express = require("express");
const app = express();

const cors = require('cors')
const bodyParser = require("body-parser");
const axios = require('axios')

const {
  randomBytes
} = require("crypto");
const chalk = require("chalk");
const log = console.log;

app.use(bodyParser.json());
app.use(cors())

const PORT = 5000;

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id] || [])

});

app.post("/posts/:id/comments", async (req, res) => {
  const commentID = randomBytes(4).toString("hex");
  const {
    title,
    text
  } = req.body;

  const comments = commentsByPostId[req.params.id] || []

  comments.push({
    id: commentID,
    title,
    text
  })

  commentsByPostId[req.params.id] = comments

  await axios.post('http://localhost:6000/events', {
    type: 'CommentCreated',
    data: {
      id: commentID,
      title,
      text,
      postID: req.params.id

    }
  }).catch((err) => {
    log(chalk.inverse.red(err.message));
});


  res.status(201).send(comments)

});

app.post('/events', (req, res) => {
  log(chalk.inverse.magenta("received event ", req.body.type))

  res.send({});
})

app.listen(PORT, () => {
  log(chalk.inverse.green("Comments is runing on port : " + PORT + " "));
});