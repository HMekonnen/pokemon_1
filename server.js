
// Import express
const express = require("express")

// Import Morgan
const morgan = require("morgan")


// Import Pokie Schema
const Pokie = require("./pokemonSchema")


// Connect w/ Mongoose
const mongoConfig = require("./config")


// Import router file
const pokemonRouter = require("./routes/api/pokemon")



//Config
require("dotenv").config()


//Create PORT
const PORT = process.env.PORT || 3000



//Initialize express
const server = express()


// Body Parser MiddleWare
server.use(express.json())

// Dev Morgan
server.use(morgan("dev"))

// M.W to allow handling of form submissions- Devin uses-> app.use express.static static("public") - Look it up. 
 server.use(express.urlencoded({extended:false}))

// Connect server.js w/ pokemon route file & Pokie Schema
server.use('/', pokemonRouter);

server.use('/', Pokie)

// Homepage "welcome"
server.get('/home',(req,res)=>{
    res.status(200).json({message: 'Welcome to the Pokemon App!'});
})



// Listen at PORT
server.listen(PORT, ()=>{
    mongoConfig()
console.log(` Server is listening at port: ${PORT}`)
})
