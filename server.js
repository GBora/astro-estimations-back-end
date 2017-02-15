'use strict';

const Hapi = require('hapi');

const dbOpts = require('./configs/db.settings.json');

const server = new Hapi.Server();

let startHandler = () => {
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
}

let errorHandler = (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
}

server.register({
    register: require('hapi-mongodb'),
    options: dbOpts
}, startHandler, errorHandler);

server.connection({ 
    host: '0.0.0.0', 
    port: process.env.PORT,
    routes: {
        cors: true
    }
});

server.route(require('./routes/routes.js'));
