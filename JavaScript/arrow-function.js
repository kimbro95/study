/*
- arrow funtion(화살표 함수)
*/

// 함수 선언문
// 어디서든 호출 가능
function sayHello1() {
    console.log('hello1');
}
sayHello1();


// 함수 표현식
// 코드에 도달하면 함수 생성, 생성된 이후에 호출 가능
let sayHello2 = function () {
    console.log('hello2');
}
sayHello2();


// 화살표 함수
let add1 = (num1, num2) => {
    return num1 + num2;
}
let add2 = (num1, num2) => num1 + num2;     // return문이 한줄이라면 괄호를 생략 할 수 있다.
let sayHello3 = name => `Hello ${name}`;    // 인수가 한개일 때도 괄호를 생략 할 수 있다.
