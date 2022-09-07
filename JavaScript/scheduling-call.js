/*
- setTimeout, setInterval
*/

// setTimeout 일정 시간이 지난 후 함수를 실행
// 3000 = 3s
function fn1(){
    console.log(3);
}
setTimeout(fn1, 3000);

setTimeout(function() {
    console.log(3); 
}, 3000);

function showName(name){
    console.log(name);
}
const tId = setTimeout(tId, 3000, 'Mike'); // 함수, 시간, 인수
clearTimeout(tId);  // clearTimeout을 이용하면 setTimeout에 설정된 스케줄링을 취소할 수 있다.

setTimeout(function(){
    console.log(2);
}, 0);  // 0이라해도 바로 실행되는것이 아니다. => 기본적으로 브라우저에서 4ms 정도 대기 시간이 있다.
console.log(1); // 현재 실행중인 스크립트가 실행되고 스케줄링이 실행되기에 1 -> 2 순서로 출력된다.



// setInterval 일정 시간 간격으로 함수를 반복
function showName2(name){
    console.log(name);
}
const tId2 = setInterval(showName2, 1000, 'Jane');  // 1초 마다 'Jane' 출력

// 5초 이후 출력 종료
let num = 0;
function showTime3(){
    console.log(`${num++}초 경과.`);
    if(num > 5){
        clearInterval(tId3);
    }
}
const tId3 = setInterval(showTime3, 1000);