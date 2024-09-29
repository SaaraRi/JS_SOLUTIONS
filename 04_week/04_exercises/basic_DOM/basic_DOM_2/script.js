/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/


const input = document.querySelector("#fruitInput")
const button = document.querySelector('#addFruitBtn')
const list = document.querySelector("#fruitList")


/*const inputValue = document.querySelector('#fruitInput').value;   

//can be put inside function like this*/


function addFruit() {
    
    console.log(input.value);
    const newFruit = document.createElement('li');
    newFruit.textContent = input.value;
    list.appendChild(newFruit);
    input.value = "";
}

button.addEventListener('click', addFruit);



/*
const input = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitBtn');
const list = document.querySelector('#fruitList');

function fruitList() {
    console.log(input.value);
    const newElement = document.createElement('li');
    newElement.textContent = input.value;
    list.appendChild(newElement)
    input.value = ''
}

button.addEventListener('click', fruitList)*/






