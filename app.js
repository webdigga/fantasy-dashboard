const express = require( 'express');
const app = express();
const port = 3000;

app.get( '/', ( req, res ) => {
    res.send( 'Hello fantasy dashboard!' );
});

app.use( require( './routes/my-team' ) );

app.listen( port, () => {
    console.log( `This application is running on port ${ port }` );
});
