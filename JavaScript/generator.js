/*
- Generator
- 함수의 실행을 중간에 점췄다가 재개할 수 있는 기능
- 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행한다. ex) Redux Saga
- next(), return(), throw()
    iterable
    - Symbol.iterator 메서드가 있다.
    - Symbol.iterator 는 iterator 를 반환해야한다.

    iterator
    - next 메서드를 가진다.
    - next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
    - 작업이 끝나면 done은 true가 된다.
*/

// Generator - function 옆에 * 사용하여 만들고 함수내에 yield 키워드를 사용하여 함수의 실행을 멈출 수 있다.
function* fn() {
    yield 1;
    yield 2;
    yield 3;
    return "end";
}
const a = fn();

function* fn2() {
    try {
        console.log(1);
        yield 1;
        console.log(2);
        console.log(3);
        yield 2;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}
const b = fn2();
console.log(b);         // fn2 {[[GeneratorState]]: 'suspended'}

// next를 사용시 가장 가까운 yield문을 만날때 까지 실행
console.log(b.next());  // 1 > {value: 1, done: false}  => value는 yield 오른쪽의 값(생략시 undefined), done은 함수가 실행이 끝났는지 여부 끝 => true 진행중 => false
// 한번더 next시 다음으로 가까운 yield까지 실행
console.log(b.next());  // 2 > 3 > {value: 2, done: false}
// 한번더 next 후에 return문을 만날시
console.log(b.next());  // {value: 'finish', done: true} => value는 return값을 가지게 되고, done은 함수가 끝났기에 true를 반환
// return을 만나고도 next 시에
console.log(b.next());  // {value: undefined, done: true}

// return() - return 메소드를 호출하면 done 속성값은 true가 된다.
console.log(b.return('END'));   // {value: 'END', done: true}

// throw() - catch문을 통해 error를 출력하고 done 속성값은 true가 된다.
// console.log(b.throw(new Error('err'))); // Error: err


// 배열은 iterable - 배열 또한 반복가능한 객체이기에 Symbol.iterator가 있다.
const arr = [1, 2, 3, 4, 5];
const data = arr[Symbol.iterator]();
console.log(data.next());   // {value: 1, done: false}
console.log(data.next());   // {value: 2, done: false}

// 문자열 또한 iterable
const hello = 'hello';
const data2 = hello[Symbol.iterator]();
for (let v of data2) {
    console.log(v);         // 'h' > 'e' > 'l' > 'l' > 'o'
}


// next()에 인수 전달 - 외부로부터 값을 입력 받을 수 있다. 또한 값을 미리 만들어 두지 않음.
function* fn3() {
    const num1 = yield "첫번째 숫자";
    console.log(num1);

    const num2 = yield "두번째 숫자";
    console.log(num2);

    return num1 + num2;
}
const c = fn3();

console.log(c.next());  // {value: '첫번째 숫자', done: false}
console.log(c.next(3)); // 3 > {value: '두번째 숫자', done: false}
console.log(c.next(7)); // 7 > {value: 10, done: true}


// yield* - yield*을 이용하여 다른 generator를 호출 할 수 있다.
function* gen1() {
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "hello";
    yield* gen1();
    yield "!";
}
console.log(...gen2()); // hello w o r l d !