const express = require("express");
const router = express.Router();

router.get('/id/:id', (req, res) => {
    const id = req.params.id
    
    const idisnan = Number(id);

    if (Number.isNaN(idisnan)) {
        return res.status(500).send("That is not a number.")
    };

    if (!id) {
        res.status(400).send("Please provide a parameter.")
    }

    res.send("ID: " + id)
});

module.exports = router;