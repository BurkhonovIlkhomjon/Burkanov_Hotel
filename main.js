'use strict';

/*console.log(document.querySelector('.massage').
textContent);
document.querySelector('.massage').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;*/
 
const secretNumber = Math.trunc(Math.random() * 20) +  1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener
('click', function() {
    const x = Number (document.querySelector('.guess').value);
     console.log(x,typeof x);


     if (!x) {
         document.querySelector('.message').textContent = 'No number!';
     } else if (x === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';

     } 
     else if (x > secretNumber )
    {
        if (score > 1){
            score--;
         document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = ' Too High!';
        
      
        }

         else {
            document.querySelector('.message').textContent = ' You Lose Game';
            document.querySelector('.score').textContent = 0;
          
         }
     }
     else if (x < secretNumber) {
         if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Too LOW!';
    

         }
        else {
            document.querySelector('.message').textContent = ' You Lose Game';
            document.querySelector('.score').textContent = 0;
            
        }
     }

})