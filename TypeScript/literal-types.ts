/*
- 리터럴 타입(Literal Types)
*/

// 문자열 리터널 - litertName1 처럼 정해진 string 값을 가진것을 문자열 리터럴이라한다.
const litertName1 = 'Bob';
let litertName2 = 'Tom';
//litertName2 = 3;    // error 최초 할당된 값이 string이라 에러 number도 사용하려면 let litertName2:string | number = 'Tom';

type Job = "police" | "developer" | "teacher";

interface LiteralUser {
    name: string;
    job: Job;
}
const literUser: LiteralUser = {
    name: 'Bob',
    //job: 'student', // error => type Job에 할당하지 않아서
    job: 'developer',
}


// 숫자형 리터럴
interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3;
}
const student: HighSchoolStudent = {
    name: 'Kim',
    //grade: 4    // error  =>  interface HighSchoolStudent{} grade에 4가 없기 때문에
    grade: 3,
}