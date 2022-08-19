/*
- Variable
자바 스크립트에서 변수를 선언할때
변하지 않는  값 => const
변할 수 있는 값 => let

변수는 문자와 숫자, &, _만 사용
첫글자는 숫자가 될 수 없다.
예약어는 사용 할 수 없다. ex) char, class, if, let...
가급적 상수는 대문자로 선언한다.
변수명은 읽기 쉽고 이해할 수 있게 선언한다.
*/

const PI = 3.14;
// PI = 3.15;       ==> error

let name = "mike";
name = "bro";


// var, let, const
// -var는 선언하기 전에 사용 할 수있다.
var name2 = 'Mike';
console.log(name2);     // Mike

var name2 = 'Jane';
console.log(name2);     // Jane

// -한번 선언된 변수를 다시 선언할 수 있다.
// -코드가 이동하는건 아니지만 최상위로 올라간 것 처럼 동작한다. => 이것을 호이스팅(hoisting)이라 한다.
// -호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 해동
console.log(name3);     // undefined
var name3 = 'Mike';

console.log(name4);     // ReferenceError
let name4 = 'Jane';

// Temporal Dead Zone
// let, const는 TDZ에 영향을 받아 할당을 하기 전에는 사용할 수 없다. => 코드를 예측 가능하게하고 잠재적인 버그를 줄일 수 있다.
console.log(name5);     // Temporal Dead Zone
const name5 = 'Mike';   // 선언 및 할당
console.log(name5);     // 사용 가능


/*
변수의 생성과정
선언단계 > 초기화 단계 > 할당 단계

var 
1. 선언 및 초기화 단계
2. 할당 단계

let 
1. 선언 단계
2. 초기화 단계
3. 할당 단계

const
1. 선언 + 초기화 + 할당


스코프
var
함수 스코프(fuction-scoped) 함수 내부에서만 선언된 변수는 함수 안에서만 접근할 수 있다.

let, const
블록 스코프(block-scoped)   함수, if문, for문 등 코드블록 내부에서 선언한 변수는 코드블록 내부에서만 유효하며 외부에서는 접근할 수 없다.(지역변수)

const age = 30;
if(age > 19){
    var text = '성인';
}
console.log(text);      
함수가 아닌 if문 이기에 var를 if문 내부에 선언해도 밖에서 사용할 수 있다. 
하지만 if문내에 let, const로 선언했을 경우에는 사용할 수 없다 => ReferenceError
*/
