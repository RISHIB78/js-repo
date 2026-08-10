//"use strict" is a directive that enables strict mode in JavaScript, which helps catch common coding errors and unsafe actions. It is recommended to use strict mode to write more secure and optimized code.
"use strict";
//alert("Hello, World!"); // It is not working in node.js because alert is a browser-specific function. In a Node.js environment, you would typically use console.log() to output messages to the console instead of using alert().
//code readiblity should be maintained by using proper indentation, meaningful variable names, and comments to explain the purpose of the code. This makes it easier for others (and yourself) to understand and maintain the code in the future.

let name = "John Doe"; // String 
let age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "traveling", "coding"]; // Array
let address = { // Object
  street: "123 Main St",
  city: "New York",
  zipCode: "10001"
};
let accountId; // Undefined

//NUMBER,STRING,BOOLEAN,ARRAY,OBJECT,UNDEFINED are the primitive data types in JavaScript. Each of these data types serves a specific purpose and can be used to store different kinds of values in a program.

//nULL is Stand alone value
//Undefined is a variable that has been declared but has not yet been assigned a value. It represents the absence of a value or an uninitialized state. In contrast, null is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is intentionally empty OR WE CAN SAY VALUE IS NOT DEFINED YET.
console.table({ name, age, isStudent, hobbies, address, accountId });