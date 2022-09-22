/*
- 함수(function)
*/
// void - return 값이 없을 경우
function add1Fn(num1, num2) {
    console.log(num1 + num2);
}
// number - return 값이 있고 number 타입일 경우
function add2Fn(num1, num2) {
    return num1 + num2;
}
// boolean - return 값이 있고 true / false 일 경우
function isAdultFn(age) {
    return age > 19;
}
// Optional - Optional Parameter일 경우 뒤에 ?를 붙여준다. => 선택적 매개변수
function hello(name) {
    return "Hello, ".concat(name || "World");
}
var result = hello();
var result2 = hello('kim');
//const result3 = hello(123); // error
function hello2(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You r ").concat(age, ".");
    }
    return "Hello, ".concat(name, ".");
}
console.log(hello2('kim'));
console.log(hello2('park', 20));
// 나머지 매개변수 타입 작성법 - 나머지 매개변수를 사용시 전달받은 매개변수를 배열로 나타내기에 타입도 배열 형태로 기입해야한다.
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, cur) { return prev + cur; }, 0);
}
addNumbers(1, 2, 3); // 6
var Sam = { name: 'Kim' };
function showName(age, gender) {
    console.log(this.name);
}
var result3 = showName.bind(Sam);
result3(30, 'M');
function join(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age,
        };
    }
    return "나이는 숫자로 입력해주세요.";
}
var Kim = join("kim", 26);
var Lee = join("Sam", "20");
