// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.


/* function evenNumbers() {
    let i = 2;
    do {
        console.log(i);
        console.log(100 - i);
        i += 2;
    } while (i < 100)
    }

    evenNumbers();


function evenNumbers() {
    let i = 2;
    while (i < 100);
        console.log(i, (100 - i), (i += 2));
    }

    evenNumbers();*/



    function generatePattern() {
        let answer = '';
        let end = 98;
        
        for (let i = 2; i < 100; i += 2) {
            answer += `${i} ${end} `;
            end -= 2
        }
        console.log(answer);
    }

    generatePattern();

    