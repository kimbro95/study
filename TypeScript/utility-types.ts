/*
- 유틸리티 타입(Utility Types)
*/

// key of - interface의 키 값들을 유니온 형태로 받을 수 있다.
interface UtilityUser {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}

type UserKey = keyof UtilityUser;   // 'id' | 'name' | 'age' | 'gender'
const uk: UserKey = 'name';


// Partial<T> - Partial은 프로퍼티를 모두 optional로 바꿔준다.
interface PartialUser {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
/*
Partial을 사용시 위의 interface를 아래의 interface 처럼 사용한다.
interface PartialUser{
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
*/
let admin: Partial<PartialUser> = {
    id: 1,
    name: "Kim",
    //job: "student",   // error
};


// Required<T> - Partial과 다르게 모든 프로퍼티를 필수로 바꿔준다.
interface RequiredUser {
    id: number;
    name: string;
    age?: number;
}
let admin2: Required<RequiredUser> = {
    id: 1,
    name: "park",
    age: 10,    // interface에서 age는 ? 옵셔널이지만 Required를 사용시 필수로 바꿔준다.
}


// Readonly<T> - Readonly 말 그대로 읽기 전용
interface ReadonlyUser {
    id: number;
    name: string;
    age?: number;
}
let admin3: Readonly<ReadonlyUser> = {
    id: 1,
    name: 'king',
}
//admin3.id = 3;  // error 처음에 할당만 가능하고 뒤에는 수정 불가


// Record<K, T> - Record<키값, 타입값>
interface UtilityScore {
    "1": "A" | "B" | "C" | "D";
    "2": "A" | "B" | "C" | "D";
    "3": "A" | "B" | "C" | "D";
    "4": "A" | "B" | "C" | "D";
}
const grade: UtilityScore = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}
/* 위의 interface와 grade 변수를 아래와 같이 Record를 이용하여 사용 할 수 있다. */
type RecordGrade = "1" | "2" | "3" | "4";
type RecordScore = "A" | "B" | "C" | "D";
const grade2: Record<RecordGrade, RecordScore> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}

// Record2
interface RecordUser2 {
    id: number;
    name: string;
    age: number;
}
function isValid(user: RecordUser2) {
    const result: Record<keyof RecordUser2, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0,
    }
    return result;
}


// Pick<T, K> - Pick은 T 타입에서 K 프로퍼티만 골라서 사용한다.
interface PickUser {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
const admin4: Pick<PickUser, "id" | "gender"> = {
    id: 0,
    gender: "F",
};


// Omit<T, K> - Pick과 달리 특정 K 프로퍼티만 생략 할 수 있다.
interface OmitUser {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
const admin5: Omit<OmitUser, "name" | "gender"> = {
    id: 0,
    age: 10,
}


// Exclude<T1, T2> - T1의 타입들 중에서 T2타입과 겹치는 타입을 제거 Omit과 비슷하지만 Omit은 프로퍼티를 제거하고 Exclude 타입으로 제거
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // T2의 타입은 number와 string을 생략한 boolean만 남는다.


// NonNullable<Type> - Null을 제외한 타입을 생성한다. Null만 제외하는건 아니고 undefined도 함께 제외한다.
type T1Non = string | null | undefined | void;
type T2Non = NonNullable<T1Non>;    // T2의 타입은 null과  undefined를 제외한 string과 void만 남는다.