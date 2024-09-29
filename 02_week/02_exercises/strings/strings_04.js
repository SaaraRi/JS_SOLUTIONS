/**
Refine the getFirstCharacter function to return the first character of the name parameter provided to it.
 */


//function getFirstCharacter(name) {}


function getFirstCharacter(name) {          //1.
    return name[0];
}

/* function getFirstCharacter(name) {       2.
    return name.slice(0,1)
}

function getFirstCharacter(name) {          3.
    return name.substring(0,1)
}

function getFirstCharacter(name) {          4.
  const nameArr = name.split("");
  return name[0];
}

function getFirstCharacter(name) {          5.
    return name.charAt(0);
}
 
getFirstCharacter("Webpage")

 */



// Sample usage - do not modify
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"
