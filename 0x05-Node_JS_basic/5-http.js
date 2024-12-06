const http = require('http');
// const url = require('url');
const path = require('path');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
        } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students:\n');

        const databasePath = path.resolve(process.argv[2]);

        countStudents(databasePath)
            .then((output) => {
                res.end(output);
            })
            .catch((error) => {
                res.end(error.message)
            });
        } else {
            res.writeHead(404, 'Content-Type', 'text/plain');
            res.end('Route not found');
        }
    } else {
        res.writeHead(404, 'Content-type', 'text/plain')
        res.end('Method not allowed')
    }
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

module.exports = app;
