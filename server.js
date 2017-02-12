'use strict';

const Hapi = require('hapi');

const dbOpts = {
    "url": "mongodb://admin:administrator@ds056789.mlab.com:56789/astro-estimations",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};

const server = new Hapi.Server();

server.register({
    register: require('hapi-mongodb'),
    options: dbOpts
},function() {
    // Start the server
    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

server.connection({ 
    host: 'localhost', 
    port: 8000,
    routes: {
        cors: true
    }
});

server.route(require('./routes/routes.js'));
