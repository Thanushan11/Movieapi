const express = require('express');
const movieRoutes = require('./routes/movies.routes');
const connectDb = require('./lib/db');

const app = express();
const port = 3000;

//json midlle ware
app.use(express.json())


app.get("/", (req, res) => {
    res.send('Hi, I am Thanushan');
});

//connect db
connectDb();

// CRUD functionality of movies
app.use("/movies",movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
