/*
- async, await
*/

// async - async라는 키워드를 붙여주면 항상 Promise를 반환한다.
async function getName() {
    return Promise.resolve('KIM');
    // throw new Error("err...");   // 함수 내부에서 예외가 발생하면 reject 상태에 Promise를 반환
}
console.log(getName()); // Promise {<fulfilled>: "Kim"}

getName()
    .then((name) => {
        console.log(name);
    }).catch((err) => {     // reject상태시 getName 함수에 throw 에러를 반환
        console.log(err);
    });



// await - async함수 내부에서만 사용 가능하다. 일반함수에서 사용시 에러 발생
function getName2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showName() {
    const result = await getName2('Jane');  // await 키워드 오른쪽에서는 Promise가 오고 그 Promise가 처리될때까지 기다린다.
    console.log(result);
}
console.log('시작');
showName(); // 'Jane' =>  1초후 출력



// promise를 이용한 코드를 async-await으로 변환해보기
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 완료');
        }, 1000);
    });
};
const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            //res('2번 완료');
            rej('2번 실패')
        }, 3000);
    });
};
const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 완료');
        }, 2000);
    });
};

// Promise
// console.log("시작");
// f1()
//     .then((res) => f2(res))
//     .then((res) => f3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log('===== 끝 =====')
//     });

//      ↓↓↓↓↓↓↓↓↓↓↓↓

// async-await - reject시 Promise는 catch => async-await은 try catch문을 사용
console.log("시작");
async function order() {
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();

// async-await Promise.all
console.log("시작");
async function order() {
    try {
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();

