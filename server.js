const jsonServer = require('json-server')
const server = jsonServer.create()

const middlewre = jsonServer.defaults()

const route = jsonServer.router('db.json')

server.use(middlewre)
server.use(route)

const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log('server is running successfully in ',PORT)
})