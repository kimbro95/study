/*
- Destructuring assignment(구조 분해 할당)
구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서
그 값을 변수에 담을 수 있게 하는 표현식이다.
*/

// 배열 구조 분해
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'


// split을 이용한 배열 구조 분해
let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");
console.log(user4); // 'Mike'
console.log(user5); // 'Tom'
console.log(user6); // 'Jane'


// 기본값
let [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(b); // undefined => 값이 없으면

let [d = 3, e = 4, f = 5] = [1, 2];
console.log(d); // 1
console.log(e); // 2
console.log(f); // 5 => 값이 없으면 미리 설정해둔 기본값 5가 출력된디.


// 일부 반환값 무시 => 공백과 쉼표를 이용하여 필요하지않은 배열 요소를 무시 할 수 있다.
let [user7, , user8] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user7); // 'Mike'
console.log(user8); // "Jane"


// 바꿔치기 변수의 값을 서로 바꾸고 싶을때
let aa = 1;
let bb = 2;
let cc = a;
a = b;
b = c;
// 구조 분해 할당을 사용하면 위의 코드를 아래의 코드로 편리하게 바꿀 수 있다.
let aaa = 1;
let bbb = 2;
[aaa, bbb] = [bbb, aaa];
console.log(aaa);   // 2
console.log(bbb);   // 1


// 객체 구조 분해
let user = { name: 'Mike', age: 30 };
let { name, age } = user;
console.log(name);  // 'Mike'
console.log(age);   // 30


// 새로운 변수 이름으로 할당
let { name: userName, age: userAge } = user;
console.log(userName);  // 'Mike'
console.log(userAge);   // 30


// 기본값
let student = { name: 'James', age: 12 };
let { studentName, studentAge, studentGender = 'male' } = student;
console.log(studentGender); // 'male' => 기본값을 설정하지 않을 경우 undefined