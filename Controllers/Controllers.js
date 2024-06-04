const Movie = require("../models/movie.model")

 const movieIndex =(req,res)=>{
    res.send("get all movie")
}
 const movieCreate =async(req,res)=>{
    //create the movie info
    // console.log(req.body)

    //valdate data
    const newMovie = new Movie({
        
            Title: req.body.Title,
            description: req.body.description
        
    })
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
   



    return res.json(req.body)

}
 const movieUpdate =(req,res)=>{
    res.send("put all movie")
}

 const movieDelete =(req,res)=>{
    res.send(" send all")
}
module.exports = {
    movieIndex,
    movieCreate,
    movieUpdate,
    movieDelete
};