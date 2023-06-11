const http = require('http');

const port = 1245;

const app = http.createServer((req, resp) => {
  resp.end('Hello Holberton School!');
}).listen(port);

module.exports = app;
