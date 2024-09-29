/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/




const newContent = document.getElementById('#content')

const newButton = document.getElementById('#buttonId')


function changeText() {

newContent.textContent = "Hello, World!"

newButton.textContent = "Bye, World!"

}


