/*
- data type
*/

// 문자형 string
const name = "mike";
const name1 = "mike";
const name2 = 'mike';
const name3 = `mike`;

const message = "I'm a bro";                // I'm a bro
const message2 = 'I\'m a bro';              // I'm a bro
const message3 = `I'm a ${name};`           // I'm a mike
const message4 = `나는 ${27 + 1}살 입니다.`; // 나는 28살 입니다.

const str1 = "나는 ";
const str2 = " 입니다.";
console.log(str1 + name + str2);            // 나는 mike 입니다.

const age1 = 30;                            // number
console.log(str1 + age1 + "살" + str2)      // string

// 숫자형 Number
const age = 30;
const PI = 3.14;

console.log(1 + 2); // 더하기   => 3
console.log(6 - 2); // 빼기     => 4
console.log(3 * 2); // 곱하기   => 6
console.log(6 / 2); // 나누기   => 3
console.log(6 % 4); // 나머지   => 2

const x = 1 / 0;    // 무한대 Infinity

const bro = "bro";
const y = bro / 2;  // NaN      => Not a Number


// Boolean
const a = true;     // 참
const b = false;    // 거짓
console.log(name == 'mike');    // true
console.log(age > 40);          // // false


// null 과 undefined
let level;
console.log(level); // undefined
let user = null
console.log(user);  // null


// typeof 연산자
console.log(typeof 3);          // number
console.log(typeof name);       // string
console.log(typeof true);       // boolean
console.log(typeof "type");     // string
console.log(typeof null);       // object       object는 객체 but null은 객체가 아니다.
console.log(typeof undefined);  // undefined