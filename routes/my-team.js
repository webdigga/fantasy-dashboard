const express = require('express');
const router = express.Router();
const myTeam = require( '../controllers/my-team' );
const asyncMiddleware = require( '../utils/asyncMiddleware' );

router.get('/my-team', asyncMiddleware(async ( req, res, next ) => {
    try {
        const myTeamResponse = await myTeam;
        res.json( myTeamResponse );
    } catch( error ) {
        res.json( error );
    }
}));

module.exports = router;
