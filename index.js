const server = require('./modules/server');
const router = require('./modules/router');
const requestHandlers = require('./modules/requestHandlers');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);