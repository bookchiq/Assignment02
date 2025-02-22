function largerOrSmaller() {
    // Prompt the user for two numbers.
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    // Convert the input to numbers.
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Compare the two numbers and output the largest number.
    if (num1 > num2) {
        document.getElementById("output").innerHTML = num1;
    } else if (num1 < num2) {
        document.getElementById("output").innerHTML = num2;
    } else {
        // They're equal, so we can output either one.
        document.getElementById("output").innerHTML = num1;
    }
}