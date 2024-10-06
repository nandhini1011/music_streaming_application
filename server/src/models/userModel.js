const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const audio = new Schema({
    audioName : {
        type : String,
        required : true
    },
    audioLink : {
        type : String,
        required : true
    },
    notes : {
        type : String
    }
});

const library = new Schema({
    libraryName : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    audioList : {
        type : [audio]
    }
});

const playlist = new Schema({
    playlistName : {
        type : String,
        required : true
    },
    songs : [{ type: Schema.Types.ObjectId, ref: 'songs' }]
})

const user = new Schema({
    name : {
        type : String,
        required : true
    },
    mail : {
        type : String
    },
    password : {
        type : String
    },
    mobileNo : {
        type : String
    },
    playlists : [playlist],

    liked : [{ type: Schema.Types.ObjectId, ref: 'songs' }],

    userLibrary : [library]
});

module.exports = mongoose.model( "users" , user );