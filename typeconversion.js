let number="33"
console.log("The type of number is:", typeof number); // Output: string
let converted=Number(number);
console.log("The type of converted is:", typeof converted); 
console.log(converted); // Output: NaN (Not a Number) because "33abc" cannot be converted to a valid number
console.log(typeof number);