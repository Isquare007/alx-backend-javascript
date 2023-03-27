export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    studentList.reduce((sum, student) => sum + student.id,
      0);
  }
  return [];
}
