let students = ["Haris", "umer", "Azeem"];

// Day X: Arrays basics - creation, access, and common methods

// 1. Array create karna
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// 2. Index se element access karna (0 se start hota hai)
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango

// 3. Array ki length nikalna
console.log(fruits.length); // 4

// 4. push() - end mein element add karna
fruits.push("grapes");
console.log(fruits); // [..., "grapes"]

// 5. pop() - end se element remove karna
fruits.pop();
console.log(fruits); // grapes wapas hat gaya

// 6. unshift() - start mein element add karna
fruits.unshift("kiwi");
console.log(fruits); // kiwi sab se pehle aa gaya

// 7. shift() - start se element remove karna
fruits.shift();
console.log(fruits); // kiwi wapas hat gaya

// 8. indexOf() - kisi element ka index dhoondna
console.log(fruits.indexOf("mango")); // 2

// 9. includes() - check karna ke element array mein hai ya nahi
console.log(fruits.includes("banana")); // true

// 10. loop se array print karna
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
