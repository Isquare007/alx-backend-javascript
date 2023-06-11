const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');
  data.shift();
  if (data.slice(-1)[0] === '') {
    data.pop();
  }
  console.log(`Number of students: ${data.length}`);
  const CS = [];
  const SWE = [];

  for (const line of data) {
    const str = line.split(',');
    if (str[3] === 'CS') {
      CS.push(str[0]);
    }
    if (str[3] === 'SWE') {
      SWE.push(str[0]);
    }
  }
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
}

module.exports = countStudents;
