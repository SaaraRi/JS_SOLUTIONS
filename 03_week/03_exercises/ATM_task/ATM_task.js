
"use strict";



let balance = 1000

function checkBalance() { 
    alert("Your current account balance is   " + balance);
    main();
    }
    


    function deposit() {

        let userResponse1 = prompt("Do you want to make a deposit to your account? y/n");
    
        if (userResponse1 === "y") {
    
            let userDeposit = +prompt("Type in the amount of deposit:   ");
            if (userDeposit > 0) {
                balance += userDeposit;
    
            alert("Deposit successful. Your current account balance is:   " + balance);
            main();
            } else {
                alert("Deposit failed. Your current account balance is:   " + balance); 
                main();
            }
            
            } else {  
                alert("Deposit cancelled. Your current account balance is:   " + balance); 
                main();
            }
        }

    
        function withdraw() {

            let userResponse = prompt("Do you want to make a withdrawal from your account? y/n");
        
            if (userResponse === "y") {
        
                let userWithdrawal = +prompt("Type in the amount of withdrawal:   ");
        
                if (userWithdrawal <= balance) {
        
                    balance -= userWithdrawal
        
                    alert("Withdrawal successful. Your current account balance is:   " + balance);
                    main();
            
                } else { 
                 
                    alert("There are not enough funds on your account. Your current balance is:   " + balance);
                     
                    let userResponse2 = prompt("Do you wish to withdraw another amount? y/n");
                
                    if (userResponse2 === "y") {
                
                            let userWithdrawal2 = +prompt("Type in the amount of withdrawal:   ");
                
                            if (userWithdrawal2 <= balance) {
                
                                balance -= userWithdrawal2
                
                                alert("Withdrawal successful. Your current account balance is:   " + balance);
                                main();
                           
                                } else {
                                alert("Withdrawal cancelled. Your current account balance is:   " + balance)
                                main();
                                }
                
                        } else {
                        alert("Withdrawal cancelled. Your current account balance is:   " + balance);
                        main();
                         } 
                    }
                
                } else { 
                    alert("Withdrawal cancelled. Your current account balance is:   " + balance);
                    main();
                } 
                }
                
    


/*
    function withdraw() {

        let userResponse2 = prompt("Do you want to make a withdrawal from your account? y/n");
    
        while (userResponse2 === "y") {
    
            let userWithdrawal = +prompt("Type in the amount of withdrawal:   ");

           while (userWithdrawal > balance) {

                alert("There are not enough funds on your account. Your current balance is:   " + balance);

                withdraw()
            }

            balance -= userWithdrawal

            alert("Withdrawal successful. Your current account balance is:   " + balance);
            main();         
                
        }
        
            alert("Withdrawal cancelled. Your current account balance is:   " + balance);
            main();
          
             } 

            




       /*         } else { 
                 
                alert("There are not enough funds on your account. Your current balance is:   " + balance);
                 
                let userResponse2 = prompt("Do you wish to withdraw another amount? y/n");

                     if (userResponse2 === "y") {

                        let userWithdrawal2 = +prompt("Type in the amount of withdrawal:   ");

                        while (userWithdrawal2 > balance) {
                            
                            alert("There are not enough funds on your account. Your current balance is:   " + balance);
                 
                            userResponse2 = prompt("Do you wish to withdraw another amount? y/n");
                        }
                    
                        balance -= userWithdrawal2

                        alert("Withdrawal successful. Your current account balance is:   " + balance);
                        main();
                            

                    } else {
                    alert("Withdrawal cancelled. Your current account balance is:   " + balance);
                    main();
                  
                     } 

                } else
                 { 
                alert("Withdrawal cancelled. Your current account balance is:   " + balance);
                main();
            } 

        */


        


            function quit() {
                let userExit = prompt("Do you want to quit? y/n")
                if (userExit === "n") {
                    main() 
                } else {
                    alert("Thank you, have a nice day!")
                    return;
                }
            } 

            

            function main () {

                let menuAnswer = +prompt ("Press 1 to check account balance. Press 2 to make a deposit. Press 3 to make a withdrawal. Press 0 to quit.")

                switch (menuAnswer) {
                    case 0:
                    quit();
                    break;
    
                    case 1:
                    checkBalance ();
                    break;

                    case 2:
                    deposit();
                    break;

                    case 3:
                    withdraw();
                    break;

                    default:
                    quit();
                    }
                    }
        


            main()