/*
-Iteration Statements(반복문)
for
while
do while
*/

// for
// for(초기값, 조건, 코드 실행 후 작업){}  조건이 false가 될 경우 멈춘다.
for(let i = 0; i < 10; i++){
    // 실행 할 코드
    console.log(i); // 0 ~ 9까지 출력
}


// while
let i = 0;
while( i < 10 ){
    // 실행 할 코드
    console.log(i); // 0 ~ 9까지 출력
    i++;            // 조건에 증감식이 없거나 값이 변화되지않을 경우 무한반복되어 프로그램이 뻗어버린다.
}


// do whiile
// 적어도 1번의 코드를 실행하고 반복문이 돈다.
let k = 0;
do{
    // 실행 할 코드
    console.log(k); // 0 ~ 9까지 출력
    k++;
} while( k < 10 )


// 반복문을 빠져나오는 방법
// break
// 멈추고 빠져나온다.
while(true){
    let answer = confirm("keep going?");
    if(!answer){
        break;
    }
}


// countinue
// 멈추고 다음 반복으로 넘어가 진행한다.
// ex) 짝수만
for(let i = 0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}