const express = require('express');
const router = express.Router()

const oauth2 = require('./oauth2');
const latency = require('./latency');
const discord = require('./discord');
const lastfm = require('./lastfm');

router.use('/ping', latency);
router.use('/oauth2', oauth2);
router.use('/discord', discord);
router.use('/lastfm', lastfm);

router.use('*', (req, res)=> {
    res.status(404)
    res.json({
        message: "Resource Not Found"
    })
})

module.exports = router;