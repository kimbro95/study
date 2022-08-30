/*
- Array Methods(배열 메소드)
*/

// arr.splice(n, m) n부터 m개 제거
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
console.log(arr1); // [1, 4, 5]

// arr.splice(n, m, x) n부터 m개 제거하고 추가
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 3, 10, 20);
console.log(arr2); // [1, 10, 20, 5]

let arr3 = ["나는", "입니다."];
arr3.splice(1, 0, "대한민국", "국민");  // 2번째 인자에 0을 넣을경우 아무것도 제거하지않고 새로운 요소를 추가한다.
console.log(arr3);  // ['나는', '대한민국', '국민', '입니다.']

// arr.splice() 삭제된 요소 반환
let arr4 = [1, 2, 3, 4, 5];
let result1 = arr4.splice(1, 2);
console.log(arr4);      // [1, 4, 5]
console.log(result1);   // [2, 3]

// arr.slice(n, m) n부터 m까지 반환, 괄호안에 빈 값이면 배열이 복사된더.
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(1, 4));  // [2, 3, 4]

// arr.concat(arr1, arr2) 합쳐서 새배열로 반환
let arr6 = [1, 2];
console.log(arr6.concat([3, 4]));           // [1, 2, 3, 4]
console.log(arr6.concat([3, 4], [5, 6]));   // [1, 2, 3, 4, 5, 6]
console.log(arr6.concat([3, 4], 5, 6));     // [1, 2, 3, 4, 5, 6]

// arr.forEach(fn) 배열반복
let users = ['Mike', 'James', 'Tom'];
users.forEach((name, index) => {
    console.log(`${index}. ${name}`);
});
/*
0. Mike
1. James
2. Tom
*/

// arr.indexOf / arr.lastIndexOf    index번호 확인
let arr7 = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr7.indexOf(3));     // 2
console.log(arr7.indexOf(3, 3));  // 7
console.log(arr7.lastIndexOf(3)); // 7

// arr.includes() 포함여부 확인
let arr8 = [1, 2, 3];
console.log(arr8.includes(2)); // true
console.log(arr8.includes(5)); // false

// arr.find(fn) / arr.findIndex(fn) indexOf 와 찾는다는 의미는 동일하지만 보다 복잡한 연산이 가능하도록 함수를 사용 할 수 있다.
// 첫번째 true 값만 반환하고 끝, 만약 없으면 undefined를 반환
let arr9 = [1, 2, 3, 4, 5];
const result2 = arr9.find((item) => {
    return item % 2 === 0;
});
console.log(result2);    // 2 2와 4 둘 다 가능하지만 첫번째 값만 반환

let arr10 = [
    { name: "Jane", age: 20 },
    { name: "Bro", age: 28 },
    { name: "Mike", age: 18 },
];
const isStudent = arr10.find((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});
console.log(isStudent);   // {name: 'Mike', age: 18}

const isStudent2 = arr10.findIndex((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});
console.log(isStudent2);   // 2 index 번호를 반환

// arr.filter(fn) find와 다르게 만족하는 모든 요소를 배열로 반환
let arr11 = [1, 2, 3, 4, 5, 6];
const result3 = arr11.filter((item) => {
    return item % 2 === 0;
});
console.log(result3);    // [2, 4, 6]

// arr.reverse() 역순으로 재정렬
let arr12 = [1, 2, 3, 4, 5];
console.log(arr12.reverse());   // [5, 4, 3, 2, 1]

// arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열로 반환
let arr13 = [
    { name: "Jane", age: 20 },
    { name: "Bro", age: 28 },
    { name: "Mike", age: 18 },
];
let newList = arr13.map((data, index) => {
    return Object.assign({}, data, {
        id: index + 1,
        isAdult: data.age > 19,
    });
});
console.log(newList);
/*
{ name: "Jane", age: 20, id: 1, isAdult: true }
{ name: "Bro", age: 28, id: 2, isAdult: true }
{ name: "Mike", age: 18, id: 3, isAdult: false }
 */

// arr.join 배열을 합쳐서 문자열을 만들어준다.
let arr14 = ["안녕", "나는", "JS야"];
console.log(arr14.join());      // "안녕,나는,JS야" 인수가 없을 경우 ,로 문자열을 연결한다.
console.log(arr14.join("@@"));  // "안녕@@나는@@JS야"

// arr.split 문자열을 구분자로 나누어 배열로 반환.
const arr15 = "하나,둘,셋,넷,다섯";
const result4 = arr15.split(",");
console.log(result4);   // ['하나', '둘', '셋', '넷', '다섯']

// Array.isArray() 배열인지 아닌지 확인
let arr16 = { name: "bro", age: 28 };
let arr17 = ["Mike", 28];
console.log(typeof arr16);  // object
console.log(typeof arr17);  // object
// 객체와 배열 모두 typeof시 object로 반환하기에 isArray() 사용한다.
console.log(Array.isArray(arr16));  // false
console.log(Array.isArray(arr17));  // true