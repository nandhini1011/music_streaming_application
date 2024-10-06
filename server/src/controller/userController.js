const mongoose = require("mongoose");

const users = require("../models/userModel");

const getUserProfile = async (req, res) => {
    try{
        const {id} = req.params;
        console.log(id);
        const user = await users.findById(id);
        res.status(200).json(user);
        console.log(user);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const createUser = async (req, res) => {
    try{
        const newUser = new users(req.body);
        response = await newUser.save();
        res.status(200).json(response);
        console.log("User Created!");
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}

const editUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await users.findByIdAndUpdate(id, req.body);
        console.log("User Details Updated Sucessfully.!!");
        res.status(200).json({"messsage" : "User Details Updated Sucessfully.!! "});
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}

const logIn = async (req, res) => {
    try{
        const { mail , password } = req.body;
        const user = await users.find({ mail : mail,
                                        password : password });
        res.status(200).json({ message : "Sucessfully Logged-In.!!!"});
        console.log("Sucessfully Logged-In.!!!");
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}

const likeSong = async (req, res) => {
    try{
        const userId = req.body.userId;
        const song = req.body.songId;
        const user = await users.findById(userId);
        user.liked.push(song);
        await user.save();
        console.log("Added to Liked!!!");
        res.status(200).json({
            _id : userId,
            Liked : user.liked });
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}

const createPlaylist = async (req, res) => {
    try{
        const userId = req.body.userId;
        const playlistName = req.body.playlistName;
        const user = await users.findById(userId);
        user.playlists.push({ playlistName : playlistName });
        await user.save();
        res.status(200).json({ 
            _id : userId,
            playlists : user.playlists } );
        console.log("Playlist Created.!!");
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}

const addSongToPlaylist = async (req, res) => {
    try{
        const userId = req.body.userId;
        const playlistId = req.body.playlistId;
        const songId = req.body.songId;
        const playlist = user.playlists
        const user = await users.findByIdAndUpdate(userId, {
            $push : { "playlists.${playlist}.songs" : songId }
        },{ 
            arrayFilters: { "playlist._id": playlistId },
            new: true
          });
        console.log("Song added to playlist.!!");
        res.status(200).json({ 
            _id : userId,
            playlists : user.playlists });
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}


const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = users.findByIdAndDelete(id);
        console.log("User Deleted.!");
        res.status(200).json({ "message" : "User Deleted Sucessfully.!" })
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message });
    }
}


module.exports = {
    getUserProfile,
    createUser,
    editUser,
    logIn,
    likeSong,
    createPlaylist,
    addSongToPlaylist,
    deleteUser
}
