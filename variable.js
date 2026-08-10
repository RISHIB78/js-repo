const name="John Doe";
// This is a variable declaration in JavaScript. The variable 'name' is assigned the string value "John Doe" and const can not be changed. 
var age=30;
// This is another variable declaration using 'var'. The variable 'age' is assigned the number value 30. Unlike 'const', 'var' allows the variable to be reassigned later in the code.
let city="New York";
// This is a variable declaration using 'let'. The variable 'city' is assigned the string value "New York". 'let' allows the variable to be reassigned, but it has block scope, meaning it is only accessible within the block it is defined in.
let accountid;
// This is a variable declaration using 'let' without an initial value. The variable 'accountid' is declared but not assigned any value, so it is undefined until a value is assigned to it later in the code.
console.table({name, age, city, accountid});

//globalScope is a variable that is accessible from anywhere in the code. It is declared outside of any function or block, making it available globally. In this case, 'name', 'age', 'city', and 'accountid' are all in the global scope since they are declared at the top level of the script.

//blockscope is a variable that is only accessible within the block it is defined in. In this case, 'city' and 'accountid' are block-scoped variables because they are declared using 'let', which has block scope. This means they can only be accessed within the block they are defined in, such as within a function or a loop.