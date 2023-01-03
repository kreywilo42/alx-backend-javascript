export default function getStudentIdsSum(students) {
  const idsSum = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return idsSum;
}
