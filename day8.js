//Arrays References

let house1 =["sofa " , "tv"];
let house2 = house1;

console.log(house1 === house2);

house2.push("fridge");

console.log("house1:" , house1);
console.log("house2:" , house2);

let house3 = ["sofa" , "Tv" ,"Fridge"];
console.log(house1 === house3);

let fruits1 = ["apple" , "mango"];
let fruits2 = fruits1;

fruits2.push("banana");

console.log("fruits1:" , fruits1);
console.log("fruits2:" , fruits2);

let num1 = [1 , 2];
let num2 = [1 , 2];

console.log(num1 === num2);

let colour1 = ["red" , "yellow"];
let colour2 = colour1;

colour1 = ["green" , "blue"];

colour2.push("pink");

console.log("colour1:" , colour1);
console.log("colour2:" , colour2);

//practice questions

// let arr = [7 , 9 ,0 , -2];
// let n = 3;

// let ans = arr.slice(0 , n);

// console.log(ans);

// let arr = [7 ,9 , 0 , -2];
// let n =3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = prompt("please enter a string");

// if (str.length == 0) {
//     console.log("string is empty");
// } else {
//     console.log("string is not empty");
// }

let str = "APNA COLLEGE";
let idx = 3;

if (str[idx] == str[idx].tolowercase()) {
    console.log("character is lowercase");
} else {
    console.log("character is not lowercase");
}

