/*
- 리터럴 타입(Literal Types)
*/
// 문자열 리터널 - litertName1 처럼 정해진 string 값을 가진것을 문자열 리터럴이라한다.
var litertName1 = 'Bob';
var litertName2 = 'Tom';
var literUser = {
    name: 'Bob',
    //job: 'student', // error => type Job에 할당하지 않아서
    job: 'developer',
};
var student = {
    name: 'Kim',
    //grade: 4    // error  =>  interface HighSchoolStudent{} grade에 4가 없기 때문에
    grade: 3,
};
