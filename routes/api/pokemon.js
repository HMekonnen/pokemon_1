const express = require("express")
const router = express.Router()
const pokemon = require("../../Pokemon")


//View all pokemon in Database
router
.route("/pokemon")
.get((req,res)=>{
    res.status(200).json({pokemon:pokemon});
})


// Scroll down for additional / commented out ".gets"

/**================================================================================================================= */

        // Version 1: Task from assignment using name instead of ID - yielding display of both name and url 
router
.route("/pokemon/:name")
.get((req, res)=>{
    const found = pokemon.some(pokemon => pokemon.name === (req.params.name))

    if (found){
        res.status(200).json(pokemon.filter(pokemon =>pokemon.name === (req.params.name)));
        ;
    } else {
        res.status(400).json({msg: `No pokemon by the name of ${req.params.name} found. Please check the name and try again.`})
    }
    
})

/**================================================================================================================= */
/*
Version 2: Assignment says "id" but none of the objects have id's so it will display content in the else condition

router
.route("/pokemon/:id")
.get((req, res)=>{
    const found = pokemon.some(pokemon => pokemon.id === (req.params.id))

    if (found){
        res.status(200).json({id: req.params.id});
    } else {
        res.status(400).json({msg: `No pokemon by the id of ${req.params.id} found. Please check the id and try again.`})
    }
    
})
*/


/**================================================================================================================= */
/*
Version 3: Searches by name and returns pokemon by name is found in "database"

router
.route("/pokemon/:name")
.get((req, res)=>{
    const found = pokemon.some(pokemon => pokemon.name === (req.params.name))

    if (found){
        res.status(200).json({name: req.params.name});
    } else {
        res.status(400).json({msg: `No pokemon by the name of ${req.params.name} found. Please check the name and try again.`})
    }
    
})
*/












module.exports = router