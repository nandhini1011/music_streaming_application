const express = require("express");
const router = express.Router();

const {
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
} = require("../controller/songsController");

router.get("/album", getAlbums);

router.get("/artist", getArtists);

router.get("/composer", getComposers);

router.get("/genre", getGenre);

router.get("/language", getLanguages);

router.get("/album/:albumName" , getSongByAlbum);

router.get("/artist/:artistName" , getSongByArtist);

router.get("/composer/:composerName", getSongByComposer);

router.get("/genre/:genreName", getSongByGenre);

router.get("/language/:languageName", getSongByLanguage);

router.get("/:id", getSong);

module.exports = router;