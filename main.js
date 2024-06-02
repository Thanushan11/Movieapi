const express = require('express')

const app  = express ()
const port= 3000;
app.get("/",(req,res)=>{
    res.send('hi i am thanu')
})
//CURD functionality of movies

//for Reading
app.get("/movies",()=>{
    res.send("")
})

//For creating movie

app.post("/movies",()=>{
    res.send("")
})

//for updating movie
app.put("/movies:id",()=>{
    res.send("")
})

//for deleting movie
 app.delete("/movies:id",()=>{
    res.send("")
})



app.listen(port,()=>{
    console.log(`this server is at localhost`)
})

