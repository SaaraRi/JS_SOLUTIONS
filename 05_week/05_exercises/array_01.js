// Initial array of team members
let team1 = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

for (const teamMember of team1) {
    console.log(teamMember);

    }

// Exercise 2: Remove the first member of the array.
// Write your code here:


team1.shift();
console.log(team1);


// Exercise 3: Remove the last member of the array.
// Write your code here:


team1.pop();
console.log(team1);


// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:

team1.unshift('Alex');
console.log(team1);

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:

team1.push('Linda');
console.log(team1);

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

const team2 = team1.slice(2);
console.log(team2);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

console.log(team2.indexOf('Mike'));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:

console.log(team2.indexOf('Jake'));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

team2.splice(0,1,'Carol', 'Bruce');
console.log(team2);

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:


team2.push('Bob');

const team3 = team2.slice(0);
console.log(team3);



// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:


const team4 = team3.slice(0);
console.log(team4);



// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];
// Write your code here:

const team5 = team4.concat(newMembers);
console.log(team5);

// Exercise 13: Finding all occurrences of a John
// Write your code here:

function checkTeam(teamMember) {
  return teamMember === 'John';
}

console.log(team5.filter(checkTeam));

console.log(team1.filter(checkTeam));

console.log(team5.every(checkTeam));

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

const team6 = team5.map((team5) => team5.toUpperCase());

console.log(team6);

