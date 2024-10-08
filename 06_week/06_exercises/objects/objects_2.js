/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here


let library = []

class Book {
    constructor(title, author, yearPublished) {

        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

    }
}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Lord of the Flies", "William Golding", 1954); 

library.push(book1);
library.push(book2);

console.log(library);




/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log(book1.title);

book2.yearPublished = 1960;

console.log(book2.yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

book1.genres = ['']

book1['isAvailable'] = true

console.log(book1)

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

const book3 = new Book("Catch-22", "Joseph Heller", 1961)

library.push(book3)

console.log(library)

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

function createBook(title, author, yearPublished, [genres]) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = [genres];
};

const book4 = new createBook("Slaughterhouse-Five", "Kurt Vonnegut", 1969, ["novel, satire, scifi"]);

console.log(book4);

library.push(book4);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/


const libraryString = JSON.stringify(library)

const libraryObject = JSON.parse(libraryString)


console.log(libraryString);

console.log(libraryObject);