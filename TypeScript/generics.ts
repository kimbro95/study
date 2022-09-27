/*
- 제네릭(Generics)
제네릭을 사용하면 클래스나 함수, 인터페이스를 다양한 타입으로 재사용 할 수 있다.
*/

/*
Generics - <T>타입 파라미터
<T>에 타입을 전달 받아서 함수에서 사용 할 수있도록한다.
사용하는 쪽에서 타입을 결정해준다. ex) getSize<number>(arr);
사용하는 쪽에 기입하지 않아도 타입스크립트는 전달되는 매개변수를 보고 어떤 타입인지 알 수 있다.
*/
function getSize<T>(arr: T[]): number {
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [1, 2, 3];
getSize<number | string>(arr3);



// Mobile<T>의 T 값을 사용하는 쪽에서 타입을 결정 ex) Mobile<object | { color: string;  coupon: boolean}> 또는 Mobile<boolean>
interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}
const m1: Mobile<object | { color: string; coupon: boolean }> = {   // 객체 혹은 정해인 객체 값들로 설정 할 수 있다.
    name: "S21",
    price: 1000,
    option: {
        color: "blue",
        coupon: true,
    }
}
const m2: Mobile<boolean> = {
    name: "S20",
    price: 100,
    option: false,
}


// 제네릭에서 extends
interface GenericsUser {
    name: string;
    age: number;
}
interface GenericsCar {
    name: string;
    color: string;
}
interface GenericBook {
    price: number;
}
const genericUser: GenericsUser = { name: "a", age: 10 };
const genericCar: GenericsCar = { name: "BMW", color: "blue" };
const genericBook: GenericBook = { price: 100 };

// extends로 T에 {name: string}을 확장
function genericShowName<T extends { name: string }>(data: T): string {
    return data.name;
}
genericShowName(genericUser);
genericShowName(genericCar);
//genericShowName(genericBook);