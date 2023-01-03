export default function getStudentsByLocation(students, city) {
  const studentsByLocation = students.filter(
    (student) => student.location === city,
  );
  return studentsByLocation;
}
