const mongoose = require('mongoose');

//Create a person schema
const schema = mongoose.Schema;

const personSchema =  new schema ({
    name:{
        type: String,
        required : true
    },
    age : Number,
    favoriteFoods : [String]
})


module.exports= Person = mongoose.model('person', personSchema );