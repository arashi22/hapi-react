const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

(async () => {
    const server = new Hapi.Server({
        port: 5000,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'build')
            }
        }
    });

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {    
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
})();