const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({

    artist : {type:String,required:true},
    password : {type:String,required:true},
    profile : {type:String,required:false}


})

const artist = mongoose.model('artist',artistSchema);

module.exports = artist;