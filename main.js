const express = require('express');
const movieRoutes = require('./routes/movies.routes');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hi, I am Thanushan');
});

// CRUD functionality of movies
app.use("/",movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
