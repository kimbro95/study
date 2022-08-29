/*
- String Methods(문자열 메소드)
*/

// length 문자열 길이
let desc = '안녕하세요.';
console.log(desc.length);   // 6

// 특정 위치에 접근
console.log(desc[2]);   // '하'
// 배열과 다르게 한글자만 변경하는건 허용하지 않음
desc[4] = '가';
console.log(desc);  // '안녕하세요.'

// toUpperCase() 대문자로 변환 / toLowerCase() 소문자로 변환
let word1 = 'Hello Guys';
console.log(word1.toUpperCase());   // 'HELLO GUYS'
console.log(word1.toLowerCase());   // 'hello guys'

// str.indexOf(text) 문자를 인수로 받아 몇 번째 위치한지 표시해준다.
let word3 = 'Nice to meet u';
console.log(word3.indexOf('to'));   // 5
console.log(word3.indexOf('abce')); // -1 찾는 문자가 없을 경우

// str.slice(n, m) n부터 m까지 문자열 반환
// n 부터 m 까지
// n = 시작점 m = 없으면 끝까지, 양수면 그 숫자까지, 음수면 끝에서 부터
let word4 = 'ABCDEFG';
console.log(word4.slice(2));    // 'CDEFG'
console.log(word4.slice(0, 3)); // 'ABC'
console.log(word4.slice(0, -4));// 'ABC'

// str.subString(n, m) n부터 m까지 문자열 반환
// n 과 m 사이
// 음수는 0으로 인식
let word5 = 'abcdefg';
console.log(word5.substring(2, 5)); // 'cde'
console.log(word5.substring(5, 2)); // 'cde'

// str.substr(n, m) n부터 m의 개수만큼 문자열 반환
let word6 = 'ABCDEFG';
console.log(word6.substr(2, 4));    // 'CDEF'
console.log(word6.substr(-4, 2));   // 'DE'

// str.trim() 앞 뒤 공백 제거
let word7 = ' Hello ';
console.log(word7.trim());  // 'Hello'

// str.repeat(n) 문자열을 n번 반복
let word8 = 'Hi!';
console.log(word8.repeat(3));   // 'Hi!Hi!Hi!'

// 문자열 비교
// 아스키 코드표 기준 A = 십진번 65, a = 십진법 97
console.log("a" < "c");          // true
console.log("a".codePointAt(0)); // 97

// ex 1
// slice로 한글만 가져오기
const list = [
    "01. 일번",
    "02. 이번",
    "03. 삼번",
    "04. 사번",
    "05. 오번",
];

let newList = [];
for(let i = 0; i < list.length; i++){
    newList.push(list[i].slice(4));
}
console.log(newList);   // '['일번', '이번', '삼번', '사번', '오번']'

// ex 2
// 금칙어 indexOf
function hasCola(str){
    if(str.indexOf('콜라') > -1){
        return console.log('콜라 o');
    }
    return console.log('콜라 x');
}
hasCola('제로콜라');   // '콜라 o'
hasCola('제로사이다'); // '콜라 x'
hasCola('콜라');       // '콜라 o'

// ex 3
// 금칙어 includes
function hasCola2(str){
    if(str.includes('콜라')){
        return console.log('콜라 o');
    }
    return console.log('콜라 x');
}
hasCola2('제로콜라');   // '콜라 o'
hasCola2('제로사이다'); // '콜라 x'
hasCola2('콜라');       // '콜라 o'