const mongoose = require("mongoose");

const CONNECT_STR = "mongodb+srv://nandhiniponnusamy1999:kyU9UjezIbjnWGKM@musico.alji3.mongodb.net/mdb_music_app?retryWrites=true&w=majority&appName=Musico";

const connectDB = () => {
    mongoose
        .connect(CONNECT_STR)
        .then(() => {
            console.log("Connected to Database!");
        }).catch((error) =>{
            console.log(error);
            console.error("Error Connecting to Database", error.message);
            process.exit(1);
        });
};

module.exports = connectDB;