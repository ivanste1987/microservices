const express =  require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

const { randomBytes } =  require('crypto')
const chalk = require('chalk')
const log = console.log


const PORT = 4000

const posts = []

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title, text} = req.body

    const post =  {id, title, text}
    posts.push(post)

    res.status(201).send(post)
})


app.listen(PORT, () => {
    log(chalk.inverse.green("Post is runing on port : " + PORT + " "))
})