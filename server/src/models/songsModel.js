const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songs = new Schema({
    songName : {
        type : String,
        required :true
    },
    songLink : {
        type : String,
        required : true
    },
    coverImage : {
        type : String 
    },
    album : {
        type : String
    },
    genre : {
        type : String
    },
    composer : {
        type : String
    },
    artist : {
        type : String
    },
    language : {
        type : String
    }
});

module.exports = mongoose.model("songs", songs);