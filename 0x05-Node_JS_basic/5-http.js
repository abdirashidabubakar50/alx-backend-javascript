const http = require('http');
// const url = require('url');
const path = require('path');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
      } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students:\n');

        const databasePath = path.resolve(process.argv[2]);

        // Redirect console logs to a custom stream
        const originalLog = console.log;
        const logs = [];
        console.log = (message) => logs.push(message);

        countStudents(databasePath)
          .then(() => {
            console.log = originalLog;
            res.end(logs.join('\n'));
          })
          .catch((error) => {
            console.log = originalLog;
            res.end(error.message);
          });
      } else {
        res.writeHead(404, 'Content-Type', 'text/plain');
        res.end('Route not found');
      }
    }
  } catch (error) {
    throw new Error('Route not found');
  }
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

module.exports = app;
