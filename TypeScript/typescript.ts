/*
- TypeScript(타입스크립트)
npm i -g typescript > tsconfig.json
브라우저들은 타입스크립트를 이해하지 못 한다.  
타입스크립트 코드를 자바스크립트로 변환 후 노드해야 사용 가능하다. TS => JS => browser

JS(동적언어)
런타임에 타입 결정 / 오류 발견

TS(정적언어)
컴파일 타임에 타입 결정 / 오류 발견 
코드 작성 시간을 늘어 날 수 있지만, 초기 작성시 안정적으로 빠르게 작업 할 수 있다.
다른 사람이 만든 함수를 작성 할 때 인수가 몇개인지 어떤 타입인지 일일히 찾아보지 않아도 알 수 있다.
*/


/* 
- JS
add(1, 2)를 제외하고는 원하는 사용방식이 아니고 원하는 값도 아니지만 JS를 경로를 띄우지 않는다.
function add(num1, num2) {
    console.log(num1 + num2);
}
add();  // NaN
add(1); // NaN
add(1, 2);  // 3
add(3, 4, 5);   // 7
add('hello', 'world');  // helloworld 

JS 의 경우 런타임에 타입 결정 / 오류 발견하여 1 > 2 > 3 이 출력된 이후에 error 출력함
배열이 아닌 값을 forEach로 사용 할 경우
function showItems(arr){
    arr.forEach((item) => {
        console.log(item);
    });
}
showItems([1, 2, 3]);   // 1 > 2 > 3
showItems(1, 2, 3);     // error
*/

// TS - 위의 JS 코드를 TS로 작성하기
function add(num1: number, num2: number) {
    console.log(num1 + num2);
}
// add();   error
// add(1);  error
add(1, 2);
// add(3, 4, 5); error
// add('hello', 'world');   error



function showItems(arr: number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}
showItems([1, 2, 3]);
//showItems(1, 2, 3);