const http = require('http');
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
      const responseMessage = ['This is the list of our students'];

      const databasePath = path.resolve(process.argv[2] || ''); // Default to empty string if no argument

      const captureOutput = [];
      const originalLog = console.log;
      console.log = (message) => captureOutput.push(message);

      countStudents(databasePath)
        .then(() => {
          responseMessage.push(...captureOutput);
          res.end(responseMessage.join('\n'));
        })
        .catch((error) => {
          responseMessage.push(error.message);
          res.end(responseMessage.join('\n')); // Status code remains 200
        })
        .finally(() => {
          console.log = originalLog;
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Route not found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed');
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
