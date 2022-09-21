/*
- 인터페이스(interface)
*/

// type - 특정값만들 받도록한다.
type Score = 'A' | 'B' | 'C' | 'F';

// interface - 프로퍼티를 정의해서 객체를 표현하고자 할 때
interface User {
    name: string;
    age: number;
    hobby?: string; // ?를 붙이면 값이 있어도 되고 없어도되는 경우 하지만 있을 경우 타입은 string
    readonly birthDay: number;  // 앞에 readonly를 붙이면 최초에 값을 할당 할 때만 사용 가능하고 이후에는 수정 할 수 없다.
    [grade: number]: Score;     //  type Score에 입력한 값만 grade에 할당 할 수 있다.
}
let user: User = {
    name: 'kim',
    age: 28,
    birthDay: 2000,
    1: 'A',
    2: 'B',
    3: 'F',
}
user.age = 10;
//user.gender = 'male';   // error -> interface에 gender가 정의되지않았기 때문에



// 함수 interface
interface Add {
    (num1: number, num2: number): number; // (매개변수 타입):함수의 리턴값 타입
}
const addFn: Add = (x, y) => {
    return x + y;
}
addFn(10, 20);
//addFn(10);  // error
//addFn(10, '20');  // error
//addFn(10, 20, 30);  // error

interface IsAdult {
    (age: number): boolean;
}
const checkAdult: IsAdult = (age) => {
    return age > 19;
}
checkAdult(20)  // true
checkAdult(18)  // false



// class interface - implements
interface Car {
    color: string;
    wheels: number;
    start(): void;
}
class Bmw implements Car {
    color;
    constructor(c: string) {
        this.color = c;
    }
    wheels = 4;
    start() {
        console.log('start...');
    }
}
const myCar = new Bmw('blue');

// interface extends - 확징시 extends를 사용한다.
interface Benz extends Car {
    door: number;
    stop(): void;
}
const myCar2: Benz = {
    door: 5,
    stop() {
        console.log('stop...');
    },
    color: 'white',
    wheels: 4,
    start() {
        console.log('start...');
    }
}

// 다중 extends
interface Car2 {
    color: string;
    wheels: number;
    start(): void;
}
interface Toy {
    name: string;
}
interface ToyCar extends Car2, Toy {
    price: number;
}