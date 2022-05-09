//import mongoose library
const mongoose = require("mongoose")

// look into why {Router} was used prior. - two birds one stone w/ express + express.Router, maybe?

const express = require("express")

const router =  express.Router()

//create NEW SCHEMA -- research whether {} is required for both name and image. 
const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    img: {type: String, required: true, unique: true}
   
})




// convert schema to model while declaring it as a separate variable for easy use. Name = Pokie for our Pokemon Schema / model
const Pokie = mongoose.model("Pokie", pokemonSchema)

// export model module
module.exports = Pokie


