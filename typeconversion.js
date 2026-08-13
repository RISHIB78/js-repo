let number="33"
console.log("The type of number is:", typeof number); // Output: string
let converted=Number(number);
console.log("The type of converted is:", typeof converted); 
console.log(converted); // Output: NaN (Not a Number) because "33abc" cannot be converted to a valid number
console.log(typeof number);


let number2=null;
let number3=undefined;
console.log("The type of number2 is:", typeof number2); // Output: object (this is a known quirk in JavaScript)
console.log("The type of number3 is:", typeof number3); 
let number2Variant=Number(number2);
let number3Variant=Number(number3);
console.log("The type of number2Variant is:", typeof number2Variant); // Output: number
console.log("The type of number3Variant is:", typeof number3Variant);   
console.log(number2Variant); 
console.log(number3Variant); 