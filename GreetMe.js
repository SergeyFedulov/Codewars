'use strict'

/*
Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

function greet(name) {
  let correctName = name.toLowerCase().split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('');
  return `Hello ${correctName}!`
};
