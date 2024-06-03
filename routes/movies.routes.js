const express = require('express')

const router = express.Router()


//CURD functionality of movies

//for Reading
router.get("/movies",(req,res)=>{
    res.send("get all movie")
})

//For creating movie

router.post("/movies",(req,res)=>{
    res.send("post all movie")
})

//for updating movie
router.put("/movies:id",(req,res)=>{
    res.send("put all movie")
})

//for deleting movie
router.delete("/movies:id",(req,res)=>{
    res.send(" send all")
})

module.exports = router;