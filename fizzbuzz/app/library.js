'use strict'

module.exports = {
 
 fizzBuzz: function (number) {
   if (number % 5 === 0 && number % 3 === 0){
      return 'FizzBuzz';
   }
   if (number % 3 === 0 ){
      return 'Fizz';
   }
   else if(number % 5 === 0) {
      return 'Buzz';
   }

   else {
      return number;
   }
 }

}
