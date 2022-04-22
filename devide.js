let a = 237;//change the values here
let b = 82;

function divide(num1, num2, fn) {
    console.log(fn(num1, num2))
}

function quotient(n1, n2) {
    return n1 / n2;
}

function remainder(n1, n2) {
    return n1 % n2;
}

divide(a, b, quotient)
divide(a, b, remainder)