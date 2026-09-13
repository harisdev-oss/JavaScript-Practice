//Loops

// For Loop
// for(let i=1; i<=5; i++) {
//     console.log(i);
// }

// let i = 2;
// console.log(i);

// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// }

// console.log("backwards");
 
// for(let i=15; i>=1; i=i-2) {
//     console.log(i);
// }

//for even numbers

// for(let i=2; i<=1000; i=i+2) {
//     console.log(i);
// }
// console.log("backwards");

// for(let i=10; i>=2; i=i-2) {
//     console.log(i);
// }

//Multiplication table

// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

// let n = prompt("write your number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }


//for Nested Loop

// for(let i=1; i<=3; i++) {
//     console.log(`outer loop`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }

//While loop

// let i=1;

// while(i<=10) {
//     console.log(i);
//     i++;
// }
// console.log("backwards");
// let i=10;

// while(i>=1) {
//     console.log(i);
//     i--;
// }

// let i=1;

// while(i<=20) {
//     console.log(i);
//     i = i+2;
// }

//favourite Movie

const favMovie = "avator";

let guess = prompt("guess my favourite movie");

while(guess != favMovie) {
    if(guess == "quiet") {
        console.log("you quiet");
        break;
    }
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("Congrats!!");
} 


// let i=1;
// while(i<=5) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("break at 3");





