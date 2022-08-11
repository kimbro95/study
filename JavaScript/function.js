/**
- function(함수) 
함수는 한번에 한 작업에만 집중하는게 좋다.
읽기 쉽고 어떤 동작인지 알 수 있게 네이밍을 해야 좋다.

*/

// function 함수
// 함수 함수명(매개변수){ 실행 할 코드 }
// 매개변수가 없는 함수
// function showError() {
//     alert(`ERROR!`);
// }
// showError();        // alert "ERROR!"


// 매겨변수가 있는 함수
function sayHello(name) {
    let msg = 'Hello';      // msg 변수는 함수안에 있는 지역변수이기에 함수 밖에서는 사용 할 수 없다. 
    if (name) {             // msg 변수를 함수 밖에서 쓰고 싶다면 함수 밖에 선언하는 전역변수로 사용해야한다.
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHello('Bro');    // Hellow Bro
sayHello('Mike');   // Hellow Mike
sayHello('Tom');    // Hellow Tom


// 전역변수 (global variable), 지역변수 (local variable)
let msg1 = "Welcome";
console.log(msg1);  // Welcome

function sayHello2(name) {
    let msg1 = "Hello";
    console.log(`${msg1}, ${name}`);    // Hello, Bro
}
sayHello2('Bro');
console.log(msg1);  // Welcome


// 전역변수, 지역변수 2
let name = 'Mike';

function sayHello3(name) {
    console.log(name);
}
sayHello3();        // undefined
sayHello3('Jane');  // Jane


// OR
function sayHello4(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`;
    console.log(msg);
}
sayHello4();        // Hello friend
sayHello4('Mike');  // Hello Mike


// default value
function sayHello5(name = 'friend') {   // 인수없이 호출 할 경우 기본값으로 friend를 name 변수에 할당.
    let msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello5();        // Hello friend
sayHello5('Mike');  // Hello Mike


// return으로 값 반환
function add(num1, num2) {
    return num1 + num2;
}

const result = add(3, 5);
console.log(result);    // 8