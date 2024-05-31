const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send({ message: "Welcome to Nodjs App"});
})

const port = 3456;
app.listen(port, () => {
    console.log("app is running on port", port);
})