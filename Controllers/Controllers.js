 const movieIndex =(req,res)=>{
    res.send("get all movie")
}
 const movieCreate =(req,res)=>{
    res.send("post all movie")
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