const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const createError = require("http-errors");

const userRoutes = require("./routes/userRoutes");
const songsRoutes = require("./routes/songsRoutes");

const cors = require("cors");

const connectDB = require("./config/db");
connectDB();

const createServer = () => {
    app.use(express.json());

    app.use(
        cors({
            origin: "*",
            methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
        })
    );

    // Body-parser middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use("/songs",songsRoutes);
    app.use("", userRoutes);

    app.use((req, res, next) => {
        next(createError.NotFound("This Route Does not Exist!"));
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        console.log(err);
        res.json({
            status: err.status || 500,
            error: err.message,
        });
    });

    return app;
};

module.exports = createServer;