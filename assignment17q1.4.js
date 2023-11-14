// Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts  important? 

// Precedence

/*
In algebra, we all know that multiplication and division have higher precedence than addition and subtraction

With expression 1 + 2 * 3 , you must first multiply 2 * 3 and then add 1 to the result.
well, in java-script, this concept is also valid , it is simply called operator precedence
*/

// example 

console.log(1 + 2 * 3);
// In this exoression first multiplication is done then the addition

console.log((1 + 2) * 3);
// In this expression first addition is done then the multiplication because expression in brackets have higher precedence.

// Associativity

/* Associativity ist the direction in which the expression is evaluated: right to left or left to right */

// example 

a = b = 5
// is the same as
a = (b = 5)

// Exception
 // ! Grouped expression are not always read first.
 
// If you use conditional evalutaions , the condition will be checked first, then the expression between parenthesis will be evaluated.

// example 

a || (b * c);

// In these example the condition is checked first then the expression gets evalute.