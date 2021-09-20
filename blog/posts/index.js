const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

const {
    randomBytes
} = require('crypto')
const chalk = require('chalk')
const log = console.log


const PORT = 4000

const posts = []

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {
        title,
        text
    } = req.body

    const post = {
        id,
        title,
        text
    }
    posts.push(post)

    log(post)
    await axios.post('http://localhost:6000/events', {
        type: 'PostCreated',
        data: post
    }).then(() => {
        log(post)
    }).catch((err) => {
        log(chalk.inverse.red(err.message));
    });

    res.status(201).send(post)
})
app.post('/events', (req, res) => {
    log(chalk.inverse.yellow("received event ", req.body.type))

    res.send({});
})


app.listen(PORT, () => {
    log(chalk.inverse.green("Post is runing on port : " + PORT + " "))
})