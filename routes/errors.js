const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    const Errored = false;

    if (Errored) {
        const error = new Error('ISE! Internal Server Error!')
        error.status = 500;
        return next(error);
    }

    res.send("All good!👍")
});

module.exports = router;