const Movie = require("../models/movie.model")

 const movieIndex =async(req,res)=>{
    // res.send("get all movie")
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const movieDetail =async(req,res)=>{
    // res.send("get all movie")
    try {
        const movies = await Movie.findById(req.params.id);
        if(movies == null){
            return res.status(404).json("cannot find the moviee");
        }else{
            res.json(movies)
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
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
   
    return res.json(req.body);

}
 const movieUpdate =async (req,res)=>{
    //res.send("put all movie")

    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id:req.params.id
            },{
                Title:req.body.Title,
                description:req.body.description
            },
            {
                new:true
            }
        );
        return res.status(200).json(updatedMovie);
        
    } catch (error) {
        
    }


}

 const movieDelete =(req,res)=>{
    res.send(" send all")
}
module.exports = {
    movieIndex,
    movieCreate,
    movieUpdate,
    movieDelete,
    movieDetail
};