// Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each

// Unary operator 

// These operators required one operand for operation.
// Providing two or more operators can result in syntax error.

// example

typeof "hello"

// string 

const array = [2,3,4]
delete array[2]

console.log(array)

// [2,3,<empty>]

// Binary operator

// These operators required two operand for operations.
// If one or more than two operands are provided,such operators result in syntax error.

// example 

10 + 20

// 30

80 < 20 

// false 

2 >= 2

// true

const number = 20;

// on the left, you have the first operand, the variable (const number),
// and on the right, you have the second operand, the value (20)

// Ternary operator

// These operators require three operands. In javascript, there is one operator that falls under this category-the conditional operator.

// example

const score = 80;
const scoreRating = score > 50 ? "Good" : "Poor"

// "Good"

// Conditional Operators requires

// 1. The conditonal expressions.
// 2. The truthy expressions.
// 3. The falsy expressions.