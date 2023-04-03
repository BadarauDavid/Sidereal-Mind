const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://team:SiderealMind@cluster0.sjlwzbv.mongodb.net/SiderealMind")


app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(3001, () => console.log('Server started on port 3001'));