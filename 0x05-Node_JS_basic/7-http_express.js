const express = require('express');
const path = require('path');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const responseMessage = ["This is the list of our students"];
    
    if (!process.argv[2]) {
      return res.status(500).send("Database file path is not provided");
    }

  const databasePath = path.resolve(process.argv[2]);

  try {
    const captureOutput = [];
    const originalLog = console.log;
    console.log = (message) => captureOutput.push(message);

    countStudents(databasePath)
      .then(() => {
        responseMessage.push(...captureOutput);
        res.status(200).send(responseMessage.join("\n"));
      })
      .catch((error) => {
        res.status(500).send(error.message);
      })
      .finally(() => {
        console.log = originalLog; // Restore the original console.log
      });
  } catch (error) {
      console.log = console.log;
      res.status(500).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
