const Game = require("../models/Game");
const router = require("express").Router();

router.get("/findGames", async(req, res) => {
    try{
        const games = await Game.find();
    res.status(200).json(games);
    }
    catch{
        res.status(500);
    }
});
router.post("/addGame", async(req, res) => {
    try{
    const game = new Game(req.body);
    const savedgame = await game.save();
    res.status(200);
    }
    catch{
    res.status(500);
    }
})
router.delete("/deleteGame", async(req, res) => {
    try{
        const deletedgame = await Game.deleteOne({name: req.query.name});
        res.status(200).json(deletedgame);
    }
    catch{
        res.status(500);
    }
})
router.get("/findGame", async(req, res) => {
    try{
        const name = req.query.name;
        const game = await Game.findOne({name: name});
        res.status(200).json(game);
    }
    catch{
        res.status(500);
    }
});
router.get("/findGamebyCategory/:category", async(req, res) => {
    try{
        const games = await Game.find({category: req.query.category});
        res.status(200).json(games);
    }
    catch{
        res.status(500);
    }
});

module.exports = router;