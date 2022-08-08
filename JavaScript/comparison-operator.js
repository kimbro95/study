/*
- Comparison Operator(비교 연산자)
*/
console.log(10 > 5);    // true
console.log(10 == 5);   // false  동등연산자 => =을 두개 쓰는 것.   일치연산자 => =을 세개 쓰는 것.
console.log(10 != 5);   // true


// 동등연산자
const a = 1;
const b = "1";
console.log(a == b);    // true     = 을 두번 쓸 경우 *타입*을 비교 하지 않는다.
// 일치 연산자
console.log(a === b);   // false    = 을 세번 쓸 경우 *타입*까지 비교한다.


/*
- 조건문
*/
// if문
// if, else, else if
const age = 19;
if (age > 19) {
    console.log('안녕하세요.');     // 조건문이 true 일 때
} else if (age === 19) {
    console.log('19살 입니다.');    // 특정 조건이 성립될 경우
} else {
    console.log('안녕히가세요.');   // 조건문이 false 일 때
}