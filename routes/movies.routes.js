const express = require('express')
const { movieIndex, movieCreate, movieUpdate, movieDelete } = require('../Controllers/Controllers')

const router = express.Router()


//CURD functionality of movies

//for Reading
router.get("/",movieIndex)

//For creating movie

router.post("/",movieCreate)

//for updating movie
router.put("/:id",movieUpdate)

//for deleting movie
router.delete("/:id",movieDelete)

module.exports = router;