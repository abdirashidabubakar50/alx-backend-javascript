const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = process.argv[2];

      const studentsByField = await readDatabase(databasePath);

      const responseMessage = ['This is the list of our students'];

      const sortedFields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      sortedFields.forEach((field) => {
        const students = studentsByField[field];
        responseMessage.push(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`,
        );
      });
      res.status(200).send(responseMessage.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Validate the `major` parameter
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databasePath = process.argv[2];
      const studentsByField = await readDatabase(databasePath);

      // Check if the major exists in the database
      if (studentsByField[major]) {
        const students = studentsByField[major];
        const responseMessage = `List: ${students.join(', ')}`;
        res.status(200).send(responseMessage);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
