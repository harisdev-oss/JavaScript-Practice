//Conditional Statement
//if statement
// console.log("before my if statement");
// let age= 20;
// if (age>=18) {
//     console.log("you can vote");
// }
// if (age<18) {
//     console.log("you cannot vote");
// }
//practice if statement
// console.log("before my if statement");
// let marks = 50;
// if (marks>=30) {
//     console.log("you can pass");
// }
let stock = 5;
if (stock > 0) {
    console.log("stock is available");
}
let isloggedin = true;
if (isloggedin) {
    console.log("Welcomeback!");
} 
let temperature = 38;
if (temperature > 37) {
    console.log("bhukar ha doctor ko dikhao");
}
let carttotal = 1500;
if (carttotal >1000) {
    console.log("discount milegha");
}
let passwordlength =6;
if (passwordlength >=6) {
    console.log("password is valid");
}

// let color = "red";

// if (color === "red") {
//     console.log("stop! light color is red");
// } 
// if (color === "yellow") {
//     console.log("slow down. light color is yellow");
// }
// if ( color === "green. light color is green") {
//     console.log("go");
// }

//else-if statement
// let age = 15;
// if (age>=18) {
//     console.log("you can vote");
// }
// else if (age<18) {
//     console.log("you cannot vote");
// }

// let marks =700;
// if (marks>=80) {
//   console.log("Grade A");  
// }
// else if (marks>=60) {
//   console.log("Grade B");  
// }
// else if (marks>=50) {
//   console.log("Grade C");  
// }
// else if (marks>=40) {
//   console.log("Grade D");  
// }

let month = "january"
if (month==="january") {
    console.log("Winter is here");
}
else if (month==="April") {
    console.log("Summer is here");
} 

//else statement
let age =17;
if ( age>=18) {
    console.log("you can vote");
} 
else {
    console.log("you cannot vote");
}

// let color = "white";
// if (color==="red") {
//     console.log("stop");
// } else if (color==="green") {
//     console.log("go");
// }  else if (color==="yellow") {
//     console.log("slow down");
// } else {
//     console.log("light is broken");
// }

//practice QS
let size = "XL"
if (size==="XL") {
    console.log("price is Rs.250");
} else if (size==="L") {
     console.log("price is Rs.200");
} else if (size==="M") {
     console.log("price is Rs.100");
} else {
    console.log("price is Rs.50");
}

//Nested if-else
// let marks = 30;
// if (marks>=33) {
//     console.log("pass");
//     if (marks>=80) {
//         console.log("Grade 0")
//     } else {
//         console.log("GradeA")
//     }
// } else {
//     console.log("Better luck next time!");
// }

// logical operators
//AND && Operator
// let marks = 90;

// if (marks>=33 && marks>=80) {
//     console.log("Pass")
//     console.log("Grade A")
// }

//OR Operator
// let marks = 75;

// if (marks>=33 || marks>=80) {
//     console.log("Pass")
//     console.log("Grade A")
// }

//Not Operator
let marks = 80;
if ((marks>=33 && marks<=90) || !false) {
    console.log("Pass")
}

//practice Qs
let str = "apple";
if (str [0] === "a" && str.length > 3)  {
    console.log("string is good");
} else {
    console.log("string is not good");
}

// let num = 12;
// if ((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
//     console.log("safe");
// } else {
//     console.log("not safe");
// }

//truthy & falsy
if ("") {
    console.log("it is true");
} else {
    console.log("it is false");
}

let string = " ";
if (string) {
    console.log("it has true value");
} else {
    console.log("it has false value");
}

let num = 0;
if (num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}

//Switch statement 
let color = "red"

 switch (color) {
    case "red":
    console.log("stop");
    break;
    case "yellow":
     console.log("slow down");
     break;   
    case "green":
     console.log("go")
     break;
     Default:
     console.log("light is broken");
 }

 console.log("after switch stt");
     
//   let day = 3;

//  switch (day) {
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday")  
//     break;
//     Default:
//     console.log("Invalid day")       
//  }
// 

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//Practice Qs
let day = 4;

switch(day) {
        case 1:
        console.log("Monaday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("Wednesday");
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunaday");
        break;
        Default:
        console.log("Invalid day");            
}

//alerts & prompts
// alert("Something is wrong!");
console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is wrong!");

// let roll = prompt("Enter your roll no: ");
// console.log(roll);   // quotes hata do

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
// console.log("Welcome", firstName , lastName , "!");
let msg = "Welcome "+ firstName + " "+ lastName + "!";
alert(msg);
