/*
- 기본타입(Primitive Types)
*/
// 기본타입
var car = 'bmw';
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = ['a', 'b', 'c'];
var d = ['a', 'b', 'c'];
// 튜플(Tuple) - 인덱스별로 타입이 다를경우
var e;
e = ['a', 1];
//e = [2, 'b'];   // error
e[0].toLocaleLowerCase;
//e[1].toLocaleLowerCase; // error
// void - void는 함수에서 아무것도 반환하지 않을때 사용한다.
function sayHello() {
    console.log('Hi!!!');
}
// never - never는 항상 에러를 반환하거나 영원히 끝나지않는 함수에 타입으로 사용 할 수 있다.
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
    }
}
// enum - 특정값만 원 할 때 -임의로 값을 주지 않을 경우 1, 2, 3으로 값을 준다.
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 4] = "Ios";
    Os[Os["Android"] = 5] = "Android";
})(Os || (Os = {}));
var myOs;
myOs = Os.Window;
//myOs = Os.Mac;  // error
// null, undefined
var f = null;
var g = undefined;
