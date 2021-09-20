const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors)

const chalk = require('chalk')
const log = console.log

const PORT = 9000

const posts = []

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events', (req, res) => {
    const {type, data} = req.body
    log(req.body)
    if(type === "PostCreated"){
        const {id, title, text} = data

        const post = {id, title, text, comments: [] }
        posts.push(post)
    }

    if(type === "CommentCreated"){
        const {id, title, text} = data

        const post = posts[postID]
        post.comments.push({id, title, text})
    }
    log(posts)
    res.send({})
    
})



app.listen(PORT, () => {
    log(chalk.inverse.green('Server is runing on port ' + PORT + " "))
})