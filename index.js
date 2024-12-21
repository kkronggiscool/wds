const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs'))
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(1000, () => {
    console.log("p http://localhost:1000 is running on skibidi dop dop")
});