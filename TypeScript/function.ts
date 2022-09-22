/*
- 함수(function)
*/

// void - return 값이 없을 경우
function add1Fn(num1: number, num2: number): void {
    console.log(num1 + num2);
}


// number - return 값이 있고 number 타입일 경우
function add2Fn(num1: number, num2: number): number {
    return num1 + num2;
}


// boolean - return 값이 있고 true / false 일 경우
function isAdultFn(age: number): boolean {
    return age > 19;
}


// Optional - Optional Parameter일 경우 뒤에 ?를 붙여준다. => 선택적 매개변수
function hello(name?: string) {
    return `Hello, ${name || "World"}`;
}
const result = hello();
const result2 = hello('kim');
//const result3 = hello(123); // error

function hello2(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You r ${age}.`;
    }
    return `Hello, ${name}.`;
}
console.log(hello2('kim'));
console.log(hello2('park', 20));


// 나머지 매개변수 타입 작성법 - 나머지 매개변수를 사용시 전달받은 매개변수를 배열로 나타내기에 타입도 배열 형태로 기입해야한다.
function addNumbers(...numbers: number[]) {
    return numbers.reduce((prev, cur) => prev + cur, 0)
}
addNumbers(1, 2, 3);    // 6


// this - this의 타입을 정할때는 함수의 첫번째 매개변수 자리에 this를 작성하고 타입을 기입하면된다.
interface UserInfo {
    name: string;
}
const Sam: UserInfo = { name: 'Kim' };

function showName(this: UserInfo, age: number, gender: 'M' | 'F') {
    console.log(this.name);
}
const result3 = showName.bind(Sam);
result3(30, 'M');


// Fucntion Overloading - 전달받은 매개변수 타입이나 갯수에 따라 다른 동작을 해야하는 경우 => 같은 함수 위에 작성하면된다.
interface UserInfo2 {
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): UserInfo2;
function join(name: string, age: number | string): UserInfo2 | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        }
    }
    return "나이는 숫자로 입력해주세요.";
}
const Kim: UserInfo2 = join("kim", 26);
const Lee: string = join("Sam", "20");