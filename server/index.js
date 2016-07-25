/**
 * Import dependencies
 */
import path from 'path'
import http from 'http'
import express from 'express'
import socketIo from 'socket.io'

/**
 * Constants
 */
const PORT = 3000
const app = express()
const server = http.Server(app)
const io = socketIo(server)

/**
 * Configure Application
 */
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '..', 'public')))

/**
 * Routes
 */
app.get('/', (req, res, next) => {
	res.render('index')
})

server.listen(PORT, () => {
	console.log(`Application server listening on port: ${PORT}`)
})

/**
 * Socket
 */
io.on('connection', (socket) => {
	// socket.emit('event_name', data)
	// socket.on('event_name', (data) => {

	// })
})