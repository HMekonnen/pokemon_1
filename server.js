const express = require("express")


const pokemon = require('./routes/api/pokemon')

//Config
require("dotenv").config()

//Initialize express
const server = express()

// Body Parser MiddleWare
server.use(express.json())

// M.W to allow handling of form submissions
server.use(express.urlencoded({extended:false}))

// Connect server.js w/ route file 
server.use('/', pokemon);

server.get('/',(req,res)=>{
    res.status(200).json({message: 'Welcome to the Pokemon App!'});
})

//Create PORT
const PORT = process.env.PORT || 3000

// Listen at PORT
server.listen(PORT, ()=>
console.log(` Server is listening at port: ${PORT}`)
)
