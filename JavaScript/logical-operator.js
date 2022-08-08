/*
- Logical Operator(논리 연산자)
OR  =>  ||
AND =>  &&
NOT =>  !
*/

// OR   
// 여러개 중 하나라도 true이면  true 즉 모든 값이 false 일때만 false를 리턴.
// OR는 첫번째 true를 발견하는 즉시 평가를 멈춘다.
a || b  // a 나 b 중 true가 있으면 true를 리턴.

// ex) 이름이 TOM 이거나, 성인이면 통과.
const name1 = "Mike";
const age1 = 30;

if (name1 === "TOM" || age1 > 19) {
    console.log('통과');            // 이름은 TOM이 아니지만 age가 19 보다 높기에 true => "통과" 출력
}


// AND  
// 모든 값이 true면 true 즉 하나라도 false이면 false를 리턴.
// AND는 첫번째 false를 발견하는 즉시 평가를 멈춘다.
a && b  // a 와 b 둘 다 true이면 true
// ex) 이름이 Mike 이고, 성인이면 통과.
const name2 = "Mike";
const age2 = 30;

if (name === "Mike" || age > 19) {
    console.log('통과');            // 이름이 Mike이고 age가 19 보다 높기에 true => "통과" 출력
} else {
    console.log('X');
}


// NOT  
// true이면 false, false이면 true를 리턴.
!a      // a가 false이면 true
// ex) 나이를 입력받아 성인이 아니면 돌아가게하기.
const age3 = prompt('나이?');
const isAdult = age > 19;

if (!isAdult) {
    console.log('성인이 아닙니다 돌아가세요.');
} else {
    console.log('성인입니다.');
}


// 우선순위
// ex) 남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = 'F';
const name4 = 'Joe';
const isAdult2 = true;

if (gender === 'M' && name4 === '' || isAdult2) {
    // if ((gender === 'M' && name4 === '') || isAdult2) {  AND가 OR보다 우선순위를 같는다 그렇기에 이러한 형태로 조건문이 실행된다. => "통과" 출력
    // if (gender === 'M' && (name4 === '' || isAdult2)){   예시(ex)의 의도대로 하려면 괄호를 이런식으로 묶어줘야한다.  => "통과 X" 출력
    console.log('통과');
} else {
    console.log('통과 X');
}