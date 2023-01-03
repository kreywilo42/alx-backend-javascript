export default function getListStudentIds(students) {
  const ids = [];
  if (Array.isArray(students)) {
    students.map((student) => ids.push(student.id));
  } else {
    return [];
  }
  return ids;
}
