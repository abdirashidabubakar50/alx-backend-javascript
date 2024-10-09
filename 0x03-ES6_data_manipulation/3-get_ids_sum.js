export default function getStudentIdsSUm(students) {
  const SumofIds = students
    .reduce((accumulator, currentStudent) => accumulator + currentStudent.id,
      0);
  return SumofIds;
}
