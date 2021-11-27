const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        game_details: {type: String, required: true},
        category: {type: String, required: true},
        company: {type: String, required: true},
    }
);

module.exports = mongoose.model("Game", GameSchema);