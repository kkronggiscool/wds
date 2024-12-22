const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index");
});

// its time for routaroo!
const check_for_errorsroute = require("./routes/errors");
const params = require("./routes/params")

app.use('/check-for-errors', check_for_errorsroute);
app.use('/params', params);

app.all('*', (req, res) => {
    res.status(404).render('404', { route: req.originalUrl });
});

app.listen(1000, () => {
    console.log("p http://localhost:1000 is running on skibidi dop dop");
});