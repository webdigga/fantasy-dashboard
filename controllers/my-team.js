const request = require( 'request' );
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const myTeam = request(url, { json: true }, ( error, res ) => {
    return error ? error : res;
});

module.exports = myTeam;