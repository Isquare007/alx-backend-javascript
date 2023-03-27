export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentSort = studentList.filter((student) => student.location === city);
  return studentSort.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
}
