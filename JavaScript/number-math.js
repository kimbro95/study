/*
- Number, Math(숫자, 수학)
*/

// toString()   10진수 -> 2진수/16진수
// 괄호안에 숫자를 넣으면 2진법 또는 16진법으로 계산하여 문자형으로 바꿔준다.
let num = 10;
console.log(num.toString());    // "10"
console.log(num.toString(2));   // "1010"
let num2 = 255;
console.log(num2.toString(16)); // "ff"

// Math
// Math.PI 원주율
console.log(Math.PI);   // 3.141592653589793

// Math.ceil() 올림
let num3 = 5.1;
let num4 = 5.7;
console.log(Math.ceil(num3));   // 6
console.log(Math.ceil(num4));   // 6

// Math.floor() 내림
let num5 = 5.1;
let num6 = 5.7;
console.log(Math.floor(num5));   // 5
console.log(Math.floor(num6));   // 5

// Math.round() 반올림
let num7 = 5.1;
let num8 = 5.7;
console.log(Math.round(num7));   // 5
console.log(Math.round(num8));   // 6

// 소수점 자릿수
// ex)소수점 둘째짜리 까리 표현(셋째 자리에서 반올림)
let userRate = 30.1234;
console.log(Math.round(userRate * 100) / 100);  // 30.12

// 소수점 자릿수2 toFixed() 괄호안에 숫자만큼 소수잠에 나타낼 자리수를 지정한다.
// toFixed()는 ❗❗문자열❗❗❗ 반환.
let userRate2 = 30.1234;
console.log(userRate2.toFixed(2));  // "30.12"
console.log(userRate2.toFixed(0));  // "30"
console.log(userRate2.toFixed(6));  // "30.123400"    자리수 보다 큰 값을 넣으면 0으로 채워준다.

// isNaN()
let x = Number('x');        // NaN
console.log(x == NaN);      // false
console.log(x === NaN);     // false
console.log(NaN === NaN);   // false
console.log(isNaN(x));      // true     NaN을 제외한 모든 값은 false이다.
console.log(isNaN(3));      // false

// parseInt()   Number와 다른점은 문자와 혼용되어 있어도 동작한다.
let margin = '10px';
console.log(parseInt(margin));  // 10
console.log(Number(margin));    // NaN
let redColor = 'f3';
console.log(parseInt(redColor));   // NaN    읽을 수 있는 부분까지만 읽고 숫자로 반환한다. 그래서 문자로 시작할 경우 NaN이다.

// parseFloat() parseInt()와 비슷하짐나 부동소수점을 반환한다.
let padding = '18.5%';
console.log(parseInt(padding));     // 18
console.log(parseFloat(padding));   // 18.5

// Math.random()
// 0 ~ 1 사이 무작위 숫자 생성
console.log(Math.random())  // ???
// 0 ~ 100 사이 무작위 숫자 생성
console.log(Math.floor(Math.random() * 100) + 1)  // ???

// Math.max() 최대값
console.log(Math.max(1, 4, -1, 2, 22, 95, 7.6)); // 95
// Math.min() 최소값
console.log(Math.min(1, 4, -1, 2, 22, 95, 7.6)); // -1
// Math.abs() 절대값
console.log(Math.abs(-1));      // 1
// Math.pow(n, m) 제곱
console.log(Math.pow(2, 10));   // 1024
// Math.sqrt() 제곱근
console.log(Math.sqrt(16));     // 4