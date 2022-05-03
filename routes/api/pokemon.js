const express = require("express")
const router = express.Router()
const pokemon = require("../../Pokemon")


//test run
router.get('/poki',(req,res)=>{
    res.status(200).json({pokemon});
})











module.exports = router