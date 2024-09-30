const mongoose = require("mongoose");

const songs = require("../models/songsModel");

const getSong = async (req,res) => {
    try{
        const {id} = req.params;
        const song = await songs.findById(id);
        res.status(200).json(song);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getAlbums = async (req, res) => {
    try{
        albums = await songs.distinct(album);
        res.status(200).json(albums);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getArtists = async (req, res) => {
    try{
        artists = await songs.distinct(artist);
        res.status(200).json(artists);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getComposers = async (req, res) => {
    try{
        composers = await songs.distinct(composer);
        res.status(200).json(composers);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getGenre = async (req, res) => {
    try{
        genres = await songs.distinct(genre);
        res.status(200).json(genres);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getLanguages = async (req, res) => {
    try{
        languages = await songs.distinct(language);
        res.status(200).json(languages);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}


const getSongByAlbum = async (req, res) => {
    try {
        const {albumName} = req.params;
        const songsByAlbum = await songs.find({ album : albumName });
        res.status(200).json(songsByAlbum);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getSongByGenre = async (req, res) => {
    try {
        const {genreName} = req.params;
        const songsByGenre = await songs.find({ genre : genreName });
        res.status(200).json(songsByGenre);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getSongByComposer = async (req, res) => {
    try {
        const {composerName} = req.params;
        const songsByComposer = await songs.find({ composer : composerName });
        res.status(200).json(songsByComposer);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getSongByArtist = async (req, res) => {
    try {
        const {artistName} = req.params;
        const songsByArtist = await songs.find({ artist : artistName });
        res.status(200).json(songsByArtist);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getSongByLanguage = async (req, res) => {
    try {
        const {languageName} = req.params;
        const songsByLanguage = await songs.find({ language : languageName });
        res.status(200).json(songsByLanguage);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

module.exports = {
    getSong,
    getAlbums,
    getArtists,
    getComposers,
    getGenre,
    getLanguages,
    getSongByAlbum,
    getSongByArtist,
    getSongByComposer,
    getSongByGenre,
    getSongByLanguage
};