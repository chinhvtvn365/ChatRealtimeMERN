const express = require('express')
const app = express()

const rooms = ['javascript', 'angular', 'react', 'vue']
const cors = require('cors')

app.use(express.urlencoded({extend: true}))
app.use(express.json())
app.use(cors())

const server = require('http').createServer(app)
const PORT = 5000
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET', 'POST']
    }
})

server.listen(PORT, ()=> {
    console.log('server running at port ', PORT);
})