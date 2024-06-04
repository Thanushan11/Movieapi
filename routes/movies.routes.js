const express = require('express')
const { movieIndex, movieCreate, movieUpdate, movieDelete, movieDetail } = require('../Controllers/Controllers')

const router = express.Router()


//CURD functionality of movies

//for Reading
router.get("/",movieIndex)


router.get("/:id",movieDetail)

//For creating movie

router.post("/",movieCreate)

//for updating movie
router.put("/:id",movieUpdate)

//for deleting movie
router.delete("/:id",movieDelete)

module.exports = router;