const http = require('http');
const createHandler = require('github-webhook-handler');

const handler = createHandler({ path: '/webhook', secret: 'pepe' });
console.log("ta calando");
http.createServer((req, res) => {
  handler(req, res, err => {
    res.statusCode = 404;
    res.end('404 - Not Found');
  });
}).listen(3000);

handler.on('error', err => console.error('Error:', err.message));

handler.on('push', event => {
  console.log('Push recibido en el repositorio:', event.payload.repository.name);
});
