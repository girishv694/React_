const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    album : {type:String, required:true},
    artist:{type:String,required:true},
    year : {type:Number,required:true},
    genre : {type:String,required:true},
    songs : {type:[String] ,required:true}

},{
    timestamps:true
})

const albumModel = mongoose.model('album',albumSchema);

module.exports = albumModel;