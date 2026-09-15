

// ===================================================
// Day X: Arrays (Topics 10-25)
// ===================================================

// 10. Array (Data Structure)
// Array ek data structure hai jo multiple values ko ek hi variable mein
// store karne ke liye use hoti hai. Values ek order (sequence) mein hoti hain.

let fruits = ["Mango", "Apple", "Banana"];

console.log(fruits); // [ 'Mango', 'Apple', 'Banana' ]
console.log(typeof fruits); // "object"  -> array bhi ek object hi hai JS mein
console.log(fruits.length); // 3 -> total items ka count

// Har value ka apna position hota hai jise "index" kehte hain (0 se start)
console.log(fruits[0]); // Mango
console.log(fruits[2]); // Banana

// ---------------------------------------------------

// 11. Visualizing Arrays
// Array ko hum ek row of boxes ki tarah imagine kar sakte hain,
// har box ka apna index number hota hai.

let colors = ["Red", "Green", "Blue", "Yellow"];

// Index:   0       1        2       3
// Value: "Red"  "Green"  "Blue"  "Yellow"

console.log(colors[0]); // Red   -> pehla box
console.log(colors[3]); // Yellow -> aakhri box

// Agar index available na ho to undefined milta hai
console.log(colors[10]); // undefined

// Last index nikalne ka formula: length - 1
console.log(colors[colors.length - 1]); // Yellow

// ---------------------------------------------------

// 12. Creating Arrays
// Arrays banane ke do tareeqe hain:

// 1) Array literal (recommended, sabse common tareeqa)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 2) Array constructor
let numbers2 = new Array(1, 2, 3, 4, 5);
console.log(numbers2);

// Empty array
let empty = [];
console.log(empty.length); // 0

// Array with mixed data types (JS isko allow karta hai)
let mixed = ["Haris", 22, true, null];
console.log(mixed);

// new Array(5) -> ek array jiski length 5 hai but empty slots
let arrWithSize = new Array(5);
console.log(arrWithSize.length); // 5
console.log(arrWithSize); // [ <5 empty items> ]

// ---------------------------------------------------

// 13. Arrays are Mutable
// Mutable ka matlab hai array ke andar values ko change kiya ja sakta hai
// bina naya array banaye — chahe array "const" se bhi declare ho.

const students = ["Ali", "Sara", "Ahmed"];

// Value change karna
students[1] = "Fatima";
console.log(students); // [ 'Ali', 'Fatima', 'Ahmed' ]

// Naya item add karna
students[3] = "Zain";
console.log(students); // [ 'Ali', 'Fatima', 'Ahmed', 'Zain' ]

// Yahan hum "students" variable ko dobara assign nahi kar rahe,
// balke uske andar ki cheezein badal rahe hain — is liye const allow karta hai.

// Ye line ERROR degi, kyunke ye poore array ko reassign karne ki koshish hai:
// students = ["New", "Array"]; // TypeError: Assignment to constant variable.

// ---------------------------------------------------

// 14. Array Methods (push, pop, shift, unshift)

let cart = ["Shoes", "Shirt"];

// push() -> end mein item add karta hai
cart.push("Watch");
console.log(cart); // [ 'Shoes', 'Shirt', 'Watch' ]

// pop() -> end se item remove karta hai aur usko return karta hai
let removedLast = cart.pop();
console.log(removedLast); // Watch
console.log(cart); // [ 'Shoes', 'Shirt' ]

// unshift() -> start mein item add karta hai
cart.unshift("Cap");
console.log(cart); // [ 'Cap', 'Shoes', 'Shirt' ]

// shift() -> start se item remove karta hai aur usko return karta hai
let removedFirst = cart.shift();
console.log(removedFirst); // Cap
console.log(cart); // [ 'Shoes', 'Shirt' ]

// push/unshift multiple items ek saath bhi le sakte hain
cart.push("Belt", "Socks");
console.log(cart); // [ 'Shoes', 'Shirt', 'Belt', 'Socks' ]

// ---------------------------------------------------

// 15. Practice Qs (Array basics + push/pop/shift/unshift)

// Q1: Ek array banao jisme apne 3 favourite cities ho, aur console.log karo.
let cities = ["Islamabad", "Lahore", "Wah Cantt"];
console.log(cities);

// Q2: Array ke last element ko print karo (bina hardcode index ke).
console.log(cities[cities.length - 1]); // Wah Cantt

// Q3: Array mein ek naya city end mein add karo using push().
cities.push("Karachi");
console.log(cities);

// Q4: Array se pehla city remove karo using shift().
cities.shift();
console.log(cities);

// Q5: Array ki total length print karo.
console.log(cities.length);

// ---------------------------------------------------

// 16. indexOf & includes Method

let subjects = ["Math", "Physics", "Chemistry", "Computer Science"];

// indexOf() -> value ka pehla index return karta hai, na mile to -1
console.log(subjects.indexOf("Chemistry")); // 2
console.log(subjects.indexOf("Biology")); // -1 (exist nahi karta)

// includes() -> true/false return karta hai (value hai ya nahi)
console.log(subjects.includes("Physics")); // true
console.log(subjects.includes("Biology")); // false

// Practical use: agar item pehle se list mein nahi hai to add karo
let newSubject = "Biology";
if (!subjects.includes(newSubject)) {
  subjects.push(newSubject);
}
console.log(subjects);

// ---------------------------------------------------

// 17. Concatenation & Reverse

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// concat() -> do (ya zyada) arrays ko jod kar NAYA array banata hai
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3] -> original array change nahi hota

// Multiple arrays ek saath concat
let arr3 = [7, 8];
let all = arr1.concat(arr2, arr3);
console.log(all); // [1,2,3,4,5,6,7,8]

// reverse() -> array ko ULTA kar deta hai (original array ko bhi change karta hai)
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // [ 'd', 'c', 'b', 'a' ]

// ---------------------------------------------------

// 18. Slice in Arrays
// slice(start, end) -> array ka ek HISSA nikalta hai, NAYA array return karta hai
// original array change NAHI hota. "end" index include nahi hota.

let numbers = [10, 20, 30, 40, 50, 60];

console.log(numbers.slice(1, 4)); // [20, 30, 40]  -> index 1 se 3 tak
console.log(numbers.slice(2)); // [30, 40, 50, 60] -> index 2 se end tak
console.log(numbers.slice(-2)); // [50, 60] -> last 2 items (negative index)
console.log(numbers); // original array wesa hi hai: [10,20,30,40,50,60]

// Practical use: array ka copy banane ke liye
let copyArr = numbers.slice();
console.log(copyArr);

// ---------------------------------------------------

// 19. Splice in Arrays
// splice(startIndex, deleteCount, item1, item2, ...)
// Ye ORIGINAL array ko directly change karta hai (mutate karta hai)

let fruits = ["Mango", "Apple", "Banana", "Grapes"];

// 1) Remove items: index 1 se 1 item remove karo
let removed = fruits.splice(1, 1);
console.log(fruits); // ['Mango', 'Banana', 'Grapes']
console.log(removed); // ['Apple'] -> removed item(s) return hote hain

// 2) Add items: index 1 par bina kuch remove kiye add karo
fruits.splice(1, 0, "Orange", "Kiwi");
console.log(fruits); // ['Mango', 'Orange', 'Kiwi', 'Banana', 'Grapes']

// 3) Replace items: index 0 se 1 item remove karo aur naya add karo
fruits.splice(0, 1, "Papaya");
console.log(fruits); // ['Papaya', 'Orange', 'Kiwi', 'Banana', 'Grapes']

// Yaad rakho: slice() naya array deta hai (safe),
// splice() original array ko badal deta hai (mutate).

// ---------------------------------------------------

// 20. Sort in Arrays
// sort() default mein values ko STRING ki tarah, alphabetically sort karta hai
// aur original array ko change karta hai.

let names = ["Zain", "Ahmed", "Bilal", "Sara"];
names.sort();
console.log(names); // [ 'Ahmed', 'Bilal', 'Sara', 'Zain' ]

// Numbers ke sath default sort() GALAT result deta hai kyunke wo string compare karta hai:
let numbers = [40, 5, 100, 25];
console.log(numbers.sort()); // [100, 25, 40, 5]  <- WRONG order

// Sahi tareeqa: compare function use karo
numbers.sort((a, b) => a - b); // ascending order
console.log(numbers); // [5, 25, 40, 100]

numbers.sort((a, b) => b - a); // descending order
console.log(numbers); // [100, 40, 25, 5]

// ---------------------------------------------------

// 21. Practice Qs (indexOf, includes, concat, reverse, slice, splice, sort)

let scores = [55, 90, 40, 78, 100, 60];

// Q1: Check karo 100 array mein hai ya nahi.
console.log(scores.includes(100)); // true

// Q2: 90 ka index nikalo.
console.log(scores.indexOf(90)); // 1

// Q3: Pehle 3 scores nikalo slice() se (bina original array change kiye).
console.log(scores.slice(0, 3)); // [55, 90, 40]

// Q4: splice() se index 2 wala score (40) remove karo.
scores.splice(2, 1);
console.log(scores); // [55, 90, 78, 100, 60]

// Q5: Array ko ascending order mein sort karo.
scores.sort((a, b) => a - b);
console.log(scores); // [55, 60, 78, 90, 100]

// Q6: Array ko reverse karke descending order print karo.
console.log([...scores].reverse()); // [100, 90, 78, 60, 55]

// ---------------------------------------------------

// 22. Arrays References
// Arrays "by reference" store hote hain, "by value" nahi.
// Matlab: agar ek array ko dusre variable mein assign karo,
// dono variables SAME array ko point karte hain.

let original = [1, 2, 3];
let copy = original; // ye copy nahi bana raha, reference copy ho raha hai

copy.push(4);

console.log(original); // [1, 2, 3, 4] -> original bhi change ho gaya!
console.log(copy); // [1, 2, 3, 4]

// Compare karne par bhi ye "same" tabhi hote hain jab same reference ho
console.log(original === copy); // true (same memory location)

let another = [1, 2, 3, 4];
console.log(original === another); // false (alag array, chahe values same hon)

// Asli copy banane ke liye slice() ya spread operator use karo:
let realCopy = [...original];
realCopy.push(5);
console.log(original); // [1, 2, 3, 4] -> ab change nahi hoga
console.log(realCopy); // [1, 2, 3, 4, 5]

// ---------------------------------------------------

// 23. Constant Arrays
// "const" sirf VARIABLE ko reassign hone se rokta hai,
// array ke ANDAR ki values ko change hone se nahi rokta (Topic 13 revisited).

const team = ["Ali", "Sara"];

team.push("Ahmed"); // ✅ allowed -> array modify ho raha hai, variable nahi
console.log(team); // ['Ali', 'Sara', 'Ahmed']

team[0] = "Zain"; // ✅ allowed
console.log(team); // ['Zain', 'Sara', 'Ahmed']

// team = ["New", "Array"]; // ❌ ERROR: const variable ko reassign nahi kar sakte

// Agar array ko TRUE immutable (freeze) karna ho:
const frozenTeam = Object.freeze(["Ali", "Sara"]);
frozenTeam.push("Ahmed"); // silently fail (ya strict mode mein error)
console.log(frozenTeam); // ['Ali', 'Sara'] -> koi change nahi hua

// ---------------------------------------------------

// 24. Nested Arrays
// Array ke andar array bhi ho sakti hai — isse "2D array" ya "nested array" kehte hain

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Access karne ke liye do index chahiye: [row][column]
console.log(matrix[0]); // [1, 2, 3] -> pehli row
console.log(matrix[0][1]); // 2 -> pehli row ka 2nd item
console.log(matrix[2][2]); // 9 -> teesri row ka 3rd item

// Real life example: students aur unke marks
let students = [
  ["Ali", 85],
  ["Sara", 92],
  ["Ahmed", 78],
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i][0] + " scored " + students[i][1]);
}
// Ali scored 85
// Sara scored 92
// Ahmed scored 78

// ---------------------------------------------------

// 25. Practice Qs (References, Constant Arrays, Nested Arrays)

// Q1: Ek const array banao aur usme push() se 2 items add karo.
const hobbies = ["Coding"];
hobbies.push("Gaming", "Reading");
console.log(hobbies); // ['Coding', 'Gaming', 'Reading']

// Q2: Ek array ko dusre variable mein assign karo aur dikhao
// ke original bhi change ho jata hai (reference wala concept).
let listA = [1, 2, 3];
let listB = listA;
listB.push(4);
console.log(listA); // [1, 2, 3, 4]

// Q3: Ab spread operator [...] use karke asli copy banao
// taake original array change na ho.
let listC = [...listA];
listC.push(100);
console.log(listA); // [1, 2, 3, 4]  -> safe raha
console.log(listC); // [1, 2, 3, 4, 100]

// Q4: Ek 2D array banao jisme 3 products aur unki price ho, phir loop se print karo.
let products = [
  ["Laptop", 150000],
  ["Phone", 80000],
  ["Watch", 15000],
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i][0] + " -> Rs. " + products[i][1]);
}

// ---------------------------------------------------