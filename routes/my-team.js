const express = require('express');
const router = express.Router();

router.get('/my-team', ( req, res ) => {
    res.send( 'My team!' );
});

module.exports = router;
