/*
- Rest Parameters(나머지 매개변수)
*/

function showName(name){    // << 인수의 개수 제한은 없다.
    console.log(name);
}
showName();                 // undefined
showName('Mike');           // 'Mike'
showName('Mike', 'Tom');    // 'Mike'

// 함수의 arguments를 얻는법
/* 
1. arguments
- 함수로 넘어 온 모든 인수에 접근
- 함수내에서 이용 가능한 지역 변수
- length / index
- Array 형태의 객체
- 배열의 내장 메서드 없음 ex. forEach, map
*/
function showName2(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName2('Bro', 'Park');

/*
2. 나머지 매개변수(Rest Parameters)
- es6 이후 부터는 나머지 매개변수를 권장한다.
- 나머지 매개변수는 정해지지않은 인수의 개수를 배열로 나타낼 수 있게 해준다.
- 나머지 매개변수는 인수의 항상 마지막에 작성해줘야한다.
*/
function showName3(...names){
    console.log(names);
}
showName3();        // [] undefined가 아닌 빈 배열 => 나머지 매개변수는 배열로 나타내기에
showName3('Mike');  // ['Mike']
showName3('Mike','James'); // ['Mike', 'James']

// 전달 받은 모든 수를 더하기
function add(...numbers){
    let result = numbers.reduce((prevent, current) => prevent + current);
    console.log(result);
}
add(1, 2, 3);       // 6
add(1, 2, 3, 4, 5); // 15

// user 객체를 만들어 주는 생성자 함수를 만들기
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skill = skills;
}
const user1 = new User('Mike', 40, 'html', 'css');
const user2 = new User('kim', 28, 'js', 'react');
const user3 = new User('park', 26, 'html', 'php');
console.log(user1); // {name: 'Mike', age: 40, skill: ['html', 'css']}
console.log(user2); // {name: 'kim', age: 28, skill: ['js', 'react']}
console.log(user2); // {name: 'kim', age: 28, skill: ['html', 'php']}