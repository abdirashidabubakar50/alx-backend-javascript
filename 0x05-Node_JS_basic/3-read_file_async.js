const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length < 2) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    const fieldIndex = headers.indexOf('field');

    students.forEach((student) => {
      const field = student[fieldIndex];
      const firstName = student[headers.indexOf('firstname')];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
