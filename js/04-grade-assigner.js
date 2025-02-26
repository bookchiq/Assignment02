function gradeAssigner() {
    var grade = prompt("Enter the grade percentage (between 1 and 100):");

    // Convert the input to a number.
    grade = parseFloat(grade);

    // Check that the grade is between 1 and 100.
    if (grade < 1 || grade > 100) {
        alert("Invalid grade. Please enter a number between 1 and 100.");
        return;
    }

    if (grade >= 90) {
        console.log("You received an A");
    } else if (grade >= 80) {
        console.log("You received a B");
    } else if (grade >= 70) {
        console.log("You received a C");
    } else if (grade >= 60) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
}