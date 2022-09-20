/*
- 기본타입(Primitive Types)
*/

// 기본타입
let car: string = 'bmw';

let age: number = 30;

let isAdult: boolean = true;

let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];

let c: string[] = ['a', 'b', 'c'];
let d: Array<string> = ['a', 'b', 'c'];


// 튜플(Tuple) - 인덱스별로 타입이 다를경우
let e: [string, number];
e = ['a', 1];
//e = [2, 'b'];   // error

e[0].toLocaleLowerCase;
//e[1].toLocaleLowerCase; // error


// void - void는 함수에서 아무것도 반환하지 않을때 사용한다.
function sayHello(): void {
    console.log('Hi!!!');
}

// never - never는 항상 에러를 반환하거나 영원히 끝나지않는 함수에 타입으로 사용 할 수 있다.
function showError(): never {
    throw new Error();
}
function infLoop(): never {
    while (true) {
    }
}

// enum - 특정값만 원 할 때 -임의로 값을 주지 않을 경우 1, 2, 3으로 값을 준다.
enum Os {
    Window = 3,
    Ios,
    Android,
}
let myOs: Os;
myOs = Os.Window;
//myOs = Os.Mac;  // error

// null, undefined
let f: null = null;
let g: undefined = undefined;