const Company = require("../models/Company");
const router = require("express").Router();

router.get("/findCompany/:name", async(req, res) => {
    try{
        const company = Company.find({"name": req.params.name});
        res.status(200).json(company);
    }
    catch{
        res.status(500);
    }
});


module.exports = router;