function calculateGrade(marks) {
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else if (marks <= 39) {
        grade = 'E';
    }

    return grade;
}

let studentMarks = ("38");

if (studentMarks >= 0 && studentMarks <= 100) {
    let grade = calculateGrade(studentMarks);
    console.log(`Grade: ${grade}`);
} else {
    console.log();
}
