const { mongoose } = require("mongoose");

const Cat = mongoose.model("Cat", 
{ 
    name: String , 
    color : String , 
});


module.exports = Cat;
