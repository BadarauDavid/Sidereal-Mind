const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const storySchema = new Schema({
    name: String,
    story: String,
    createAt: Date
})

const Story = model("Story",storySchema);

module.exports = Story;