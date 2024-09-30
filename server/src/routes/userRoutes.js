const express = require("express");
const router = express.Router();

const {
    getUserProfile,
    createUser,
    editUser,
    logIn,
    likeSong,
    createPlaylist,
    addSongToPlaylist,
    deleteUser            } = require("../controller/userController");


router.get("/user/:id", getUserProfile);

router.post("/signup", createUser);

router.patch("/user/:id", editUser);

router.get("/login", logIn);

router.patch("/likesong", likeSong);

router.patch("/playlist/create", createPlaylist);

router.patch("/playlist/addsong", addSongToPlaylist);

router.delete("/user/:id", deleteUser);

module.exports = router;