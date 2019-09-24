const express = require('express');
const router = express.Router();
const myTeam = require( '../controllers/my-team' );

router.get('/my-team', ( req, res ) => {
    res.send( myTeam );
});

module.exports = router;
