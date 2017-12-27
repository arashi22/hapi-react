const Path = require('path');
const Hapi = require('hapi');

(async () => {
    const server = new Hapi.Server({
        port: 5001,
    });

    server.route({
        method: 'GET',
        path: '/jane',
        handler(request, h){
          // const db = request.server.db;
          // const { tables } = await db(r.tableList());
          reply('tables');
        }
    });

    server.route({
      method: 'GET',
      path: '/john',
      handler(request, h){
        return h.response({response: 'jane'});
      }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
})();