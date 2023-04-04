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

let Story = require("./model/Story.js");
mongoose.connect("mongodb+srv://team:SiderealMind@cluster0.sjlwzbv.mongodb.net/SiderealMind")


app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.post("/api/story-sharing",(req,res)=>{
    const name = req.body.name;
    const story = req.body.story;
    const createAt = Date.now();

    const experience = new Story({
        name,
        story,
        createAt
    }) 
    try {
        experience.save();
        res.json(experience);
    }catch(err){
        res.status(404).json({succes:false})
    }
});

app.get("/api/story-sharing",async(req,res)=>{
    try{
        const insertedStory = await Story.find();
        res.json(insertedStory);
    }catch(err){
        console.error(err);
    }
})

app.delete("/api/story-sharing/:id",async(req,res)=>{
    const id = req.params.id;
    try {
         await Story.findByIdAndDelete(id);
    }catch(err){
        console.error(err); 
    }

})

app.listen(3001, () => console.log('Server started on port 3001'));