//maier 1: function declaration
function sumOfTwoSquared (num1, num2) {
    const sumSquared = num1 * num1 + num2 * num2;
    const squaredResult = sumSquared * sumSquared;
    return squaredResult;
}

console.log(sumOfTwoSquared(2, 3));

//manier 2: function expression
const squaredNumbers = function (num1, num2) {
    const sumSquared = num1 * num1 + num2 * num2;
    const squaredResult = sumSquared * sumSquared;
    return squaredResult;
}

console.log(squaredNumbers(2, 3));

//manier 3: arrow function
const somInKwadraat = (num1, num2) => {
    const sumSquared = num1 * num1 + num2 * num2;
    const squaredResult = sumSquared * sumSquared;
    return squaredResult;
}

console.log(somInKwadraat(2, 3));

