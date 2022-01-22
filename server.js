const path = require("path");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});


//routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on Port ${PORT} !`)
});