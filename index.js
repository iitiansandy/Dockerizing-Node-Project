const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/home', (req, res) => {
    res.send({ message: "Welcome to Nodejs App"});
});

app.get('/info', (req, res) => {
    res.send({ message: "Welcome to info page" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("app is running on port", port);
});
