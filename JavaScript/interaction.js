/*
- alert     알림
- prompt    입력을 받음
- confirm   확인을 받음

단점
창이 떠있으면 스크립트는 일시정지한다.
스타일링을 할 수 없다.
*/

// alert()
alert('Hello World !!!');   // Hello World !!! 알림창이 뜬다.


// prompt
const name = prompt("이름을 입력하세요.");  // 이름을 입력하세요. 와 함께 입력창이 생긴다. 입력값은 name 저장된다. 취소 버튼을 누를경우 name에는 null 값이 저장된다.
alert(`안녕하세요 ${name} 님`);             // 안녕하세요 ex)bro 님

const name2 = prompt("나이를 입력해주세요.", 20);   // 2번째 인수에 값을 줄 경우에는 입력창에 기본값으로 설정된다.


// confirm
const isAdult = confirm('당신은 성인 입니까?');   // alert창과 비슷하게 "당신은 성인 입니까?" 알림창이 뜬다 하지만 alert과 다르게 확인 및 취소 버튼 두가지가 있다.
console.log(isAdult)    // 확인을 누를경우 true, 취소를 누를경우 false 값이 선언된다.