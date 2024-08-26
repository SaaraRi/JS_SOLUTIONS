// Write a function named greetUser that takes a user's name as a parameter and returns a greeting message.


//  function greetUser(userName) {
    //return "Hello," + userName + "!";             //double quotes
    //return 'Hello,' + userName + '!';   //single quotes 

   // return `Hello, $(userName)!`;
//}

const greetUser = (userName) => `Hello, $(userName)!`; 

console.log(greetUser("Saara"));


// sample usage - do not modify
console.log(greetUser("Alice")); // Returns "Hello, Alice!"
console.log(greetUser("Bob")); // Returns "Hello, Bob!"
