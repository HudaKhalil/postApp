const express = require('express');
const router = express.Router();
//Post table
const { Posts } = require('../models');

router.get('/',(req, res) => {
        res.json('New Posting Page');
});

router.post('/',(req, res) => {
       
});

module.exports = router;