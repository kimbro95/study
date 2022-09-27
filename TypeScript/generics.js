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
function getSize(arr) {
    return arr.length;
}
var arr1 = [1, 2, 3];
getSize(arr1);
var arr2 = ["a", "b", "c"];
getSize(arr2);
var arr3 = [1, 2, 3];
getSize(arr3);
var m1 = {
    name: "S21",
    price: 1000,
    option: {
        color: "blue",
        coupon: true,
    }
};
var m2 = {
    name: "S20",
    price: 100,
    option: false,
};
var genericUser = { name: "a", age: 10 };
var genericCar = { name: "BMW", color: "blue" };
var genericBook = { price: 100 };
// extends로 T에 {name: string}을 확장
function genericShowName(data) {
    return data.name;
}
genericShowName(genericUser);
genericShowName(genericCar);
//genericShowName(genericBook);
