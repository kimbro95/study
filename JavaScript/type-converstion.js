/*
- Type Conversion(형 변환)
*/

// const engScore = prompt("영어 점수");    => 90
// const mathScore = prompt("수학 점수");   => 80
// result = (engScore + engScore) / 2;     => 85 X 4540 O

const engScore = 90
const mathScore = 80
result = (engScore + engScore) / 2;        // 85

/*
prompt로 입력된 값 => 문자형이다. 그렇기 때문에 "90" + "85" = "9085" => "9080" / 2 = 4540  => 이런 과정을 자동 형변환이다.
-자동 형변환
찾기 힘든 에러를 발생시킬 수 있기에 좋지않다.

-명시적 형변환
의도륵 가지고 값으 타입을 변환해주는것.
*/


// String()
// 괄호안에 값을 문자형으로 변환시킨다.
String(3);          // "3"
String(true);       // "true"
String(false);      // "false"
String(null);       // "null"
String(undefined);  // "undefined"


// Number()
// 괄호안에 문자형 값을 숫자형으로 변환시킨다.
Number("1234");     // 1234
Number("1234ABCD"); // NaN 문자안에 글자가 있을경우
Number(true);       // 1
Number(false);      // 0

Number(null);       // 0
Number(undefined);  // NaN


// Boolean()
// 숫자 0, 빈 문자열, null, undefined, NaN 같은 값은 false 그 이외에 값은 true를 반환한다.
Boolean(1);         // true
Boolean(123);       // true
Boolean("JS");      // true

Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
