/*
- array(배열)
배열은 대괄호로 묶고 ,로 구분하며 배열을 탐색 할 떄는 고유번호를 사용하는데 이것을 index라 한다.
배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있다.

length: 배열의 길이
push(): 배열 끝에 요소 추가
pop(): 배열 끝에 요소 제거
unshift(): 배열 앞에 요소 추가
shift(): 배열 앞에 요소 제거
*/

let days = ['mon', 'tue', 'wed'];
console.log(days[1]);       // 'tue'
days[1] = '화요일';
console.log(days);          // ['mon', '화요일', 'wed']

console.log(days.length);   // 3

days.push('thu');
console.log(days);          // ['mon', '화요일', 'wed', 'thu']

days.unshift('sun');
console.log(days);          // ['sun', 'mon', '화요일', 'wed', 'thu']

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);   // sun mon 화요일 wed thu
}

for (let day of days) {
    console.log(day);       // sun mon 화요일 wed thu
}