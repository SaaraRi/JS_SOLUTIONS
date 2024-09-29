/*Create a Car Class:
- Define a Car class with properties for the car's license plate, maker, model, current owner, price, and color.

User Input for Car Details:
- Set up an HTML form for users to input the car's license plate, maker, model, current owner, price, and color.
- Use JavaScript to collect the values entered by the user when the form is submitted.

Create and Store Car Objects:
- Upon form submission, instantiate a new Car object using the collected input values.
- Add this new Car object to an array that stores all the cars entered by the user.

Display Car Information:
- Use JavaScript to dynamically generate a table on the webpage, displaying the information of each car in the array.
- Ensure the table updates to include each new car when it is added.

Search for a Car by License Plate:
- Implement a function that allows the user to search for a car using its license plate.
- Include error handling to manage cases where the search input is invalid or the license plate cannot be found.

Show Search Results:
- If the search successfully finds a car, display the car's make, model, and owner on the screen.
- If no matching car is found, display a message indicating that no results were found.*/

'use strict';


const cars = [];

class Car {
    constructor (license, maker, model, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
 }

 

 const addCar = (e) => {

    e.preventDefault();

    const license = document.querySelector("#license").value;
    const maker = document.querySelector("#maker").value;
    const model = document.querySelector("#model").value;
    const owner = document.querySelector("#owner").value;
    const price = document.querySelector("#price").value;
    const color = document.querySelector("#color").value;

    const newCar = new Car(license, maker, model, owner, price, color);

    console.log(model.newCar);

    cars.push(newCar);

 }


 document.querySelector("#addbutton").addEventListener("submit", addCar)

 /*const displayCar = (e) => {

    const carsTable = document.querySelector("#carsTable");*/







 }