const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const chalk = require('chalk')
const log = console.log

const PORT = 9000

const posts = {}
console.log(posts)
app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events', (req, res) => {
    const {type, data} = req.body
    
    if(type === "PostCreated"){
        const {id, title, text, postID} = data

        posts[id] = {id, title, text, comments: [] }
    }

    if(type === "CommentCreated"){
        const {id, title, text, postID} = data

        const post = posts[postID]
        post.comments.push({id, title, text})
    }
    console.log(posts)
    log(chalk.inverse.yellow(" query received event ", req.body))
    res.send({})
    
})



app.listen(PORT, () => {
    log(chalk.inverse.green('Server is runing on port ' + PORT + " "))
})