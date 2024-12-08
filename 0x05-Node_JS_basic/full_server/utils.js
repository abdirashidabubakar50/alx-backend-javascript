import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    students.forEach((student) => {
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load database');
  }
};

// export default readDatabase;
