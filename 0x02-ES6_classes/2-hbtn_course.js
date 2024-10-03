export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  // setter for name with validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  // getter method for name
  get name() {
    return this._name;
  }

  // setter for length with validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }

    this._length = value;
  }

  // getter method for Length
  get length() {
    return this._length;
  }

  // setter method for students with validation
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new Error('students must be a string of arrays');
    }

    this._students = value;
  }

  // getter methods for students
  get students() {
    return this._students;
  }
}
