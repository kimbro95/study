/*
- 유틸리티 타입(Utility Types)
*/
var uk = 'name';
/*
Partial을 사용시 위의 interface를 아래의 interface 처럼 사용한다.
interface PartialUser{
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
*/
var admin = {
    id: 1,
    name: "Kim",
    //job: "student",   // error
};
var admin2 = {
    id: 1,
    name: "park",
    age: 10, // interface에서 age는 ? 옵셔널이지만 Required를 사용시 필수로 바꿔준다.
};
var admin3 = {
    id: 1,
    name: 'king',
};
var grade = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};
var grade2 = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};
function isValid(user) {
    var result = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0,
    };
    return result;
}
var admin4 = {
    id: 0,
    gender: "F",
};
var admin5 = {
    id: 0,
    age: 10,
};
