/*
- constructor function(생성자 함수)
가급적 첫 글자는 대문자를 사용한다.
*/

function User(name, age) {
    // 주석을 포함한 코드가 함수의 동작 원리이다. 하지만 주석부분은 생략하여 작성한다.
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}
const student = new User('Kim', 30);
console.log(student);        // {name: 'Kim', age: 30}
console.log(student.name);   // 'Kim'


function Item(title, price) {
    // this = {}
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${this.price}원 입니다.`);
    }
    // return this;
}

const item1 = new Item('가방', 2000);
const item2 = new Item('지갑', 3000);
const item3 = new Item('인형', 4000);

console.log(item1, item2, item3);
item3.showPrice();  // 가격은 4000원 입니다.
// new 없이 호출시 단순한 함수를 호출 하는 것 이기에 retunr이 없는 Item함수 이기에 undefinde가 출력된다.