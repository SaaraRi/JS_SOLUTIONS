// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {
    return number.toString();
}

function convertStringToNumber(string) {
    return Number.parseInt(string);  //return +string   
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber('42')); // 42
console.log(convertStringToNumber('97')); // 97
console.log(convertStringToNumber('11')); // 11

console.log(Number.parseInt('42')); // 42
console.log(parseInt('97')); // 97
console.log(parseInt('11')); // 11

console.log((42).toString()); // "42"
console.log((97).toString()); // "97"
console.log((11).toString()); // "11"