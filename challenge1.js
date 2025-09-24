// Challenge 1: Student Grade Generator
// Prompts for marks (0-100) and logs the corresponding grade.
const input = prompt('Enter student marks (0-100):');
const marks = Number(input);

if (Number.isNaN(marks) || marks < 0 || marks > 100) {
  console.log('Invalid marks');
} else if (marks > 79) {
  console.log('A');
} else if (marks >= 60) {
  console.log('B');
} else if (marks >= 49) {
  console.log('C');
} else if (marks >= 40) {
  console.log('D');
} else {
  console.log('E');
}