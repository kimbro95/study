/*
- object(객체) 
*/

const superman = {
    name: 'tom',
    age: 30,
}
// 객체 접근, 추가, 삭제 방법
// 접근
superman.name   // 'tom'
superman['age'] // 30

//추가
superman.gender = 'male';
superman['car'] = 'BMW';

// 삭제
delete superman.gender;
console.log(superman);  // {name: 'tom', age: 30, car: 'BMW'}


// 단축 프로퍼티
/*
const name = 'jane';
const age = 30;

const human = {
    name: name,
    age: age,
    gender: 'male',
}
*/
// ↑↑↑ 상단 주석의 코드중 객체에 name, age 부분을 하단처럼 단축하여 사용 할 수 있다.
const name = 'jane';
const age = 30;

const human = {
    name,
    age,
    gender: 'male',
}


// 프로퍼티 존재 여부 확인
const student = {
    name: 'kim',
    age: 19,
}
console.log(student.birthDay);      // error가 아닌 undefined
// 정확한 확인을 위해서는 in을 사용한다.
console.log('birthDay' in student); // false
console.log('age' in student);      // true


// for ... in 반복문
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}



function makeObject(name, age) {
    return {
        name,
        age,
        hobby: "football",
    }
}
const mike = makeObject('Mike', 30);
console.log(mike);               // {name: 'Mike', age: 30, hobby: 'football'}
console.log('age' in mike);      // true
console.log('birthDay' in mike); // false


function isAdult(user) {
    if (!('age' in user) || user.age < 20) {    // user에 age프로퍼티가 없거나 age가 20미만인 경우
        return false;
    }
    return true;
};
const Tom = {
    name: 'Tom',
    age: 30
};
const Jane = {
    name: 'Jane',
};
console.log(isAdult(Tom));  // true
console.log(isAdult(Jane)); // false