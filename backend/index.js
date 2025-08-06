// 1. json server
const jsonServer = require("json-server")

// 2. create server
const RBServer = jsonServer.create() //Returns an Express server.

// middleware is a function which have ability to break request response cycle
// 5. middleware to parse json format
const middleware = jsonServer.defaults()

// 7. setup path to store data
const router = jsonServer.router("db.json")

// 6. use middleware
RBServer.use(middleware)
RBServer.use(router)

// 3. set port number for the server
const PORT = 4000 || process.env.PORT

//4 listen to the request from the frontend to resolve the request.
RBServer.listen(PORT, ()=>{
console.log(`Server Running Successfully at port number ${PORT}`);
})

