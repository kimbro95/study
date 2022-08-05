/*
- Operators(연산자)
*/

// 거듭제곱
const num = 2 ** 3;
console.log(num);   // 8


// 우선 순위
// */ 곱하기, 나누기가 +- 더하기, 빼기보다 우선순위를 가짐


// 연산자 줄여서 쓰기
let num2 = 10;
//num2 = num2 + 5;
num2 += 5;          // 위의 연산과 동일한 결과  더하기, 빼기, 곱하기, 나머지도 동일하게 가능하다.

console.log(num2);  // 15


// 증가 연산자, 감소 연산자
let num3 = 10;
let result = num3++;    // 10   증가시키기 전 num3 값을 result에 할당하고 num3 가 증가.
//let result = ++num3;  // 11   num3 값이 증가하고 num3 값을 result에 할당.
