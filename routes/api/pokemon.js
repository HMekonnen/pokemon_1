
// Imports

const express = require("express")

const router = express.Router()

const pokemon = require("../../Pokemon")

const Pokie = require("../../pokemonSchema")





/**====================================================== ROUTE CITY===================================================================== */

//VIEW ALL pokie in Database 
router
.route("/pokemon")
.get((req,res)=>{
    Pokie.find((err, pokemon)=>{
        if (err){
            res.status(400).json({message: err.message})
        } else {res.status(200).json({pokemon:pokemon})};

        console.log("View all was run")
    })})
  



/**===================================================SEARCH FOR A POKIE BY NAME========================================================================= */

        // SEARCHES FOR SPECIFIC POKIE-  Task from assignment using name instead of ID -  displays both name and url 
router
.route("/pokemon/:name")
.get((req, res)=>{
    
    Pokie.findOne((err, pokemon)=>{
if (pokemon.name===(req.params.name)){
    res.status(200).json({pokemon:pokemon})
} else {
    res.status(400).json({msg: `No pokemon by the name of ${req.params.name} found. Please check the name and try again.`})
}
console.log("Search pokemon by name was run")
})})
    
/**===================================================CREATES ONE POKIE AND DISPLAYS IT ========================================================================= */

// CREATES ONE POKIE and Displays it
router
.route("/")
.post((req,res)=>{
    const newPokemon = req.body

    Pokie.create([newPokemon], (err, pokemon) =>{
        if (err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon}) 
        }
        console.log("Create one was run")
    }
    )})

/**===================================================SEARCH FOR A POKIE BY ID AND UPDATE========================================================================= */

        // SEARCHES FOR POKIE BY ID AND UPDATE
        router
        .route("/pokemon/:id")
        .put((req, res)=>{
            const id = req.params.id
            const updatedPokie = req.body
            Pokie.findByIdAndUpdate(id, updatedPokie,{new:true},(err, updatedPokie)=>{
        if (err){
            res.status(400).json({msg: `No pokemon by the name of ${id} found. Please check the name and try again.`, msg2: err.message})
        } else {
            res.status(200).json({msg: `Success`, display: {updatedPokie}})
        }
          
        console.log("Search pokemon by ID and update was run")
        })
    })





    /**===================================================DELETES ONE POKIE ========================================================================= */

// DELETES SINGLE POKIE BY NAME 
router
.route("/pokemon/:id")
.delete((req,res)=>{
     
    Pokie.deleteOne((err)=>{
       if(err){
           res.status(404).json({message: err.message})
       } else {
           res.status(204).json({msg: 'Pokemon was successfully deleted!'})
       }
      
       console.log("Delete one was run")
})

       })

/**===================================================LOADS ALL - INSERT MANY ========================================================================= */
 
     
// LOADS ALL DATA --> Utilizes Pokie Schema + loads all pre-existing pokies in Pokemon.js to MongoDB. 
    router
    .route("/seed")
    .get((req,res)=>{
        Pokie.insertMany(pokemon, (err, pokemons)=>{
            if(err){
                res.status(400).json({message: err.message})
            } else {
                res.status(201).json(pokemons)
            }
            console.log("Seed successfully run")
        })
    })
/**===================================================DELETES ALL========================================================================= */

// Delete ALL --> unless parameters specify otherwise    
    router
    .route("/clear")
    .delete((req,res)=>{
     
     Pokie.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(204).json({msg: 'Data was successfully cleared!'})
        }
       
        console.log("Delete many was run")
})

        })
    

   




module.exports = router



