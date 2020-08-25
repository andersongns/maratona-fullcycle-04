const { createServer } = require('http');

const defaultMessage = 'Eu sou Full Cycle';

createServer((_, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(defaultMessage);
}).listen({ port: 8080 }, () => {
    console.info(defaultMessage);
});