export default function getListStudents() {
  const students = [];
  students.push(
    {
      id: 1, firstname: 'Guillaume', location: 'San Fransisco',
    },
    {
      id: 2, firstname: 'James', location: 'Columbia',
    },
    {
      id: 5, firstname: 'Serena', location: 'San Francisco',
    },
  );
  return students;
}
