const json_server = require("json-server")

const server = json_server.create()
const middleware = json_server.defaults()
const router = json_server.router('db.json')

server.use(middleware)
server.use(router)

const PORT = 3000 || process.env.PORT
server.listen(PORT,()=>{
    console.log("Server running at port: "+PORT);
    
})