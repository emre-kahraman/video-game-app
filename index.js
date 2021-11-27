const express = require("express");
const app = express();
const mongoose = require("mongoose");
const gameRoute = require("./routes/game");

mongoose.connect("mongodb+srv://user:abdtam35@cluster0.ymy3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.use(express.json());
app.use("/api/games", gameRoute);

app.listen(5000, () => {
    console.log("Hello");
});