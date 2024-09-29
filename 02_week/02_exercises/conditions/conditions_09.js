/* Write a function named secretWordGame that takes a word as a parameter and returns a special message based on the following conditions:

If the word is "JavaScript", return "You found the secret word!".
If the word starts with the letter "J", return "You're close, but not quite!".
If the word ends with the letter "t", return "Almost there!".
If the word contains the letter "e" anywhere, return "Good guess, but not the secret word!".
For any other word, return "Keep trying!".
*/

/* function secretWordGame(inputWord) {
    if (inputWord === "JavaScript") {
        console.log("You found the secret word!");
    } else if (inputWord.charAt(0) === "J") {
        console.log("You're close, but not quite!");
    } else if (inputWord.slice(-1) === "t") {
        console.log("Almost there!");
    } else if (inputWord.indexOf === "e") {
        console.log("Good guess, but not the secret word!");
    } else {
        console.log("Keep trying!");
    }   
}*/


function secretWordGame(inputWord) {
    if (inputWord === "JavaScript") {
        console.log("You found the secret word!");
    } else if (inputWord.startsWith("J")) {
        console.log("You're close, but not quite!");
    } else if (inputWord.endsWith("t")) {
        console.log("Almost there!");
    } else if (inputWord.includes("e" || "E")) {
        console.log("Good guess, but not the secret word!");
    } else {
        console.log("Keep trying!");
    }   
}

// Sample usage - do not modify
console.log(secretWordGame("JavaScript"));  // Outputs: "You found the secret word!"
console.log(secretWordGame("Java"));        // Outputs: "You're close, but not quite!"
console.log(secretWordGame("Cat"));         // Outputs: "Almost there!"
console.log(secretWordGame("Elephant"));    // Outputs: "Good guess, but not the secret word!"
console.log(secretWordGame("Dog"));         // Outputs: "Keep trying!"


