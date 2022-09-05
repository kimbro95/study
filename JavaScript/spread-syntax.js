/*
- Spread Syntax(전개 구문)
*/
// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
console.log(result);    // [1, 2, 3, 4, 5, 6]
let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result2);    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 객체
let user4 = { name : 'Mike'};
let mike = { ...user4, age : 30};
console.log(mike); // {name: 'Mike', age: 30}

// 전개 구문 arr3을 [4, 5, 6, 1, 2, 3] 으로 변경하기
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
arr3 = [...arr4, ...arr3];
console.log(arr3);  // [4, 5, 6, 1, 2, 3]

// 객체 전개 구문
let user5 = { name : 'Kim'};
let info = { age : 28 };
let fe = [ "JS", "React" ];
let lang = ["Korean", "English"];
user6 = {
    ...user5,
    ...info,
    skills : [
        ...fe,
        ...lang,
    ],
};
console.log(user6); // { name: 'Kim', age: 28, skills: [ "JS", "React", "Korean", "English" ] }