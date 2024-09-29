
const myId = document.getElementById('myId')

const queryId = document.querySelector('#myId')


const myClass = document.getElementsByClassName('myClass')

const queryClassAll = document.querySelectorAll('.myClass')

const queryClass1 = document.querySelector('.myClass')



const myParagraph = document.getElementsByTagName('p')




console.log(myId);

console.log(queryId);


console.log(myClass);

console.log(queryClassAll);

console.log(queryClass1);



console.log(myParagraph);







function myFunction () {

    console.log("this was triggered in html")
   

}


const button = document.querySelector('#myButton')



function myFunction2() {
    
    console.log("this was triggered by addeventlistener")
  }
  

/*document.getElementById("myButton").addEventListener("click", myFunction2);

document.querySelector("#myButton").addEventListener("click", myFunction2);

   OR the one below 


button.addEventListener('click', myFunction2)


/* also function inside


document.getElementById('myButton').addEventListener('click', function() {
    alert ('Button clicked');
});

*/


button.addEventListener('click', myFunction2) 




const newButton = document.querySelector('#newButton')


const headline = document.querySelector('h1')

console.log(headline.textContent);




const newElement = document.createElement('li')



function myFunction3() { 

        headline.textContent = "YOU DIED" 
        headline.style.fontSize = "100px"
        headline.style.color = "red"
        headline.style.backgroundColor = "black"
        newButton.textContent = "haha"
        newButton.style.color="red"

        list.appendChild(newElement)

        console.log("why didn't you believe meeeee")
    
}

newButton.addEventListener('click', myFunction3) 


