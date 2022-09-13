// /*
// - Promise(프로미스)
// */

// /* Promise
// - resolve 성공한 경우, reject 실패한 경우 => 어떤일이 완료된 이후에 실행되는 함수를 callback 함수라 한다.

// 초기 new Promise
// state: pending(대기)
// result: undefined
//     ↓↓↓↓↓
// resolve(value)시
// state: fulfilled(이행됨)
// result: value

// reject(error)시
// state: rejected(거부됨)
// result: error

// */
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK')
//     }, 3000);
// });

// pr.then((result) => {   // 이행 되었을때 실행
//     console.log(`${result}`);
// }).catch((err) => {     // 거부 되었을때 실행
//     console.log(err);   
// }).finally(() => {      // 이행이던 거부던 작업이 완료되면 실행
//     console.log('출력완료!');
// });


// callback 지옥 => promise
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
            res('2번 완료');
            //rej('2번 실패')
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

// // 프로미스 체이닝 (Promises Chaining) - 프로미스가 연결-연결-연결 형태로 되는 것
// console.log('===== 시작 =====');
// f1()
//     .then((res) => f2(res))
//     .then((res) => f3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log('===== 끝 =====')
//     });


// Promise.all - 한번에 시작하고 !!!모두 이행!!! 되면 사용 할 수 있다.
// 3개(f1(), f2(), f3())의 작업이 모두 완료되어야 .then작업이 실행된다.
console.time('time');
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('time');
});

// Promise.race - all과는 달리 하나라도 이행되면 작업을 끝내버린다.
console.time('time2');
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('time2');
});