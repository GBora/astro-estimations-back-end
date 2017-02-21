'use strict';

const Hapi = require('hapi');
const dbOpts = require('./configs/db.settings.json');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Inert = require('inert');
const Vision = require('vision');

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

const options = {
    info: {
        'title': 'Astro-Estimations API Documentation',
        'version': Pack.version,
    }
};

server.register([Inert,Vision,{
    register: require('hapi-mongodb'),
    options: dbOpts
}, {
    'register': HapiSwagger,
    'options': options
}], startHandler, errorHandler);

server.connection({ 
    host: '0.0.0.0', 
    port: process.env.PORT,
    routes: {
        cors: true
    }
});

server.route(require('./routes/routes.js'));
