/*
-Switch
*/

// switch
/* ex) 사고 싶은 과일을 물어보고 가격 알려주기
사과 100원
바나나 200원
키위 300원
멜론 500원
수박 500원
*/
let fruit = prompt('과일을 선택해주세요.');
switch(fruit){
    case '사과':
        console.log('100원 입니다.');
        break;
    case '바나나':
        console.log('200원 입니다.');
        break;
    case '키위':
        console.log('300원 입니다.');
        break;
    // 멜론과 수박은 실행되는 코드가 같아서 아래처럼 작성할 수 있다.
    case '멜론':
    case '수박':
        console.log('500원 입니다.');
        break;
    default :
        console.log('없는 과일입니다.');
}