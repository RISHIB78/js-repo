let x = 3;
const y = x++;

// The value of x is incremented after the assignment to y, so y gets the original value of x (3), and then x becomes 4.

console.log(`x:${x}, y:${typeof y}`); // Output: x:4, y:number
// let p = "x: " + x;
// console.log(typeof(p));
// // console.log("y: " + y);




// let a = 5;
// let b = ++a;
// console.log(`a:${a}, b:${b}`);
// The value of a is incremented before the assignment to b, so both a and b get the incremented value (6).