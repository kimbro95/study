/*
- object methods(객체 메소드)
*/

// 변수의 값을 object에 key값으로 사용해야하는 경우에는 []괄호를 이용한다.(계산식도 가능하다.)
let n = 'name';
let a = 'age';

const user0 = {
    [n]: 'Mike',
    [a]: 30,
    [1 + 4]: 5,
};
console.log(user0); // {5: 5, name: 'Mike', age: 30}


// Object.assign() 객체 복제
const user1 = {
    name: 'Mike',
    age: 30,
}
const cloneUser = user1; // user object가 복제되지않고 객체에 저장된 참조 값들만 저장된다.

// 객체에 저장된 참조 값만이 아닌 객체 자체를 복제할 때는 object.assing() 메소드를 사용한다.
const newUser = Object.assign({}, user1);    // {} + {name: 'Mike', age: 30}
const newUser2 = Object.assign({ gender: 'male' }, user1);    // {gender : 'male'} + {name: 'Mike', age: 30}
const newUser3 = Object.assign({ name: 'Tom' }, user1);      // key값이 겹칠 경우 값을 덮어씌운다. {name: 'Mike', age: 30}

const user2 = {
    name: 'Jane',
}
const info1 = {
    age: 30,
}
const info2 = {
    gender: 'male',
}
console.log(Object.assign(user2, info1, info2));    // {name: 'Jane', age: 30, gender: 'male'}


// Object.keys() 키 배열 반환
const user3 = {
    name: 'James',
    age: 30,
    gender: 'male',
}
console.log(Object.keys(user3));    // ["name", "age", "gender"]


// Object.values() 값 배열 반환
const user4 = {
    name: 'James',
    age: 30,
    gender: 'male',
}
console.log(Object.values(user4));    // ["James", 30, "male"]


// Object.entries() 키/값 배열 반환
const user5 = {
    name: 'James',
    age: 30,
    gender: 'male',
}
console.log(Object.entries(user5));    // ["name", "James"], ["age", 30], ["gender", "male"]


// Object.fromEntries() 키/값 배열을 객체로 반환
const arr = [
    ["name", "mike"],
    ["age", 30],
    ["gender", "male"]
];
console.log(Object.fromEntries(arr));   // {name: 'mike', age: 30, gender: 'male'}