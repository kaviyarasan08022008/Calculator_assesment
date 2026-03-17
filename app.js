import logResult, { add, subtract, multiply, divide } from './math.js';

document.getElementById("calcBtn").addEventListener("click", () => {

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operator";
        }
    }

    document.getElementById("result").textContent = result;

    logResult(result);
});