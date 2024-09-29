// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

/* function averageSpeed() {
    let kilometers = prompt('How many kilometers?');
    while (kilometers > 0) {
        let time = prompt('How many hours?');
        let averageSpeed = kilometers / time;
        console.log(averageSpeed)
    }
}

averageSpeed();  */


function avgSpeed() {
    let distance, time;

    while (distance != 0) {

        distance = +prompt('Enter distance in kilometers (use numbers)');

        if (distance == 0) {
            console.log('Distance 0 - Game over');
            break;
        }

        time = +prompt('Enter time in hours (use numbers)'); 

        let average = distance / time;
        alert('Your average is: ' + average);
        console.log('Data: ', distance, time, average);
    }
}

avgSpeed();