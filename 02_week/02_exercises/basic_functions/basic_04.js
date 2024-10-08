// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.

function isEven(number) {
    return number % 2 === 0; 
}

// sample usage - do not modify
console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false




const isEven2 = (number) => number % 2 === 0;   //just a variable that has a function in it

console.log(isEven2(4)); // Returns true
console.log(isEven2(7)); // Returns false  




function isEven3(number) {      
    return number %= 2; 
}

console.log(isEven3(4)); // Returns 0
console.log(isEven3(7)); // Returns 1  
