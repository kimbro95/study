/*
- symbol(심볼)
유일성 보장
*/

// 유일한 식별자를 만들 때 사용한다.
const a = Symbol(); // new를 붙이지 않는다.
const b = Symbol();
console.log(a === b, a == b);   // false false

const id = Symbol('id');    // 괄호안에 설명을 붙여줄 수 있다. 괄호안에 문자열은 symbol 생성에 어떠한 영향도 미치지 않는다.
const user = {
    name: 'Mike',
    age: 30,
    [id]: 'myId',
}
console.log(user);      // {name: 'Mike', age: 30, Symbol(id): 'myId'}
console.log(user[id]);  // "myId"

// object keys, values, entries, for in 등은 키가 symbol형인 프로퍼티는 건너 뛴다.
console.log(Object.keys(user));     // ['name', 'age']
console.log(Object.values(user));   // ['Mike', 30]
console.log(Object.entries(user));  // [Array(2), Array(2)]


// Symbol.for() 전역 심볼
/*
하나의 심볼만 보장받을 수 있다.
없으면 만들고, 있으면 가져오기 때문이다.
Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.
*/
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2);   // true
console.log(Symbol.keyFor(id1));  // "id" symbol에 이름을 얻고 싶을때

const id3 = Symbol('id 입니다.');
console.log(id3.description);    // "id 입니다." 전역심볼이 아닌 symbol은 description으로 이름을 알 수 있다.


// 숨겨진 Symbol key 보는법
const id4 = Symbol('id');
const user1 = {
    name: 'Jane',
    age: 20,
    [id]: 'myId',
}
console.log(Object.getOwnPropertySymbols(user1));   // [Symbol(id)]
console.log(Reflect.ownKeys(user1));                // ['name', 'age', Symbol(id)]


// ex) 다른 사람이 만들어 놓은 프로퍼티에 영향을 주지 않으면서 메소드를 추가하는 법
// 만들어진 객체
const userData = {
    name: "James",
    age: 12,
};
// 추가 작업
// userData.showName = function () { }; 이런식으로 추가하면 엉뚱한 데이터가 나올 수 있기에 심볼을 이용한다.
const showName = Symbol("show name");
userData[showName] = function () {
    console.log(this.name);
};
userData[showName]();   // "James"
// 보여지는 메시지
for (let key in userData) {
    console.log(`His ${key} is ${userData[key]}.`);
}
