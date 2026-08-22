//String Methods

//trim method
// let msg = "     Hello World     "
// console.log(msg.trim());
// console.log(msg.trim().length)

let rawname = "     Muhamma Haris     "
console.log(rawname.trim());
console.log(rawname.trim().length);

let password = prompt("Set your password");
let newpass = password.trim();
console.log(newpass);

//string immutable in js

// let a = "dog";
// a[0] = "f";
// console.log(a);

let a = "dog";
a[0] = "f";
console.log(a);

//upercae lowercase

let name = "Apna College";
console.log("name");

// let msg = "error";

// console.log(msg.toUpperCase());

//Methods with arguments

// let msg = "ILoveCoding"

//msg.indexOf("Love");
//msg.indexOf("o");


//Method Channig
// let msg = "   hello"
// let newMsg = msg.trim();
// console.log("after trim :" ,newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after Uppercase :" ,newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);  //This is Method Channing

//Slice Method
let msg = "ApnaCollege"
console.log(msg.slice(-3))

//Replace and Repeat Method
