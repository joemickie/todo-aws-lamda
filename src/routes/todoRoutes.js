const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    const { id } = req.query;
    res.send(`Authorized. ID: ${id}`);

});

module.exports = router;
