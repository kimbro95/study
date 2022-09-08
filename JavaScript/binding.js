/**
- call, apply, bind
- 함수 호출 방식과는 상관없이 this를 지정할 수 있다.
*/

// call - call메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: 'Mike',
};
const tom = {
    name: 'Tom',
};
function showThisName(){
    console.log(this.name);
}
showThisName();         // undefined
showThisName.call(mike);// Mike
showThisName.call(tom); // Tom


function updateUser(bDay, job){
    this.bDay = bDay;
    this.job = job;
}
updateUser.call(mike, 1995, 'actor');
console.log(mike);  // {name: 'Mike', bDay: 1995, job: 'actor'}



// apply - apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다. 
// call은 일반적인 함수와 마친가지로 매개변수를 직접받지만, apply는 매개변수르 배열로 받는다.
updateUser.apply(tom, [2000, 'student']);
console.log(tom);   // {name: 'Tom', bDay: 2000, job: 'student'}

const numbers = [3, 10, 7, 5, 1];
// const minNumber = Math.min(...numbers);
// const maxNumber = Math.max(...numbers);
// 위의 스프레드 문법을 이용한 방식을 아래의 apply, call을 사용하여 가능하다.
const minNumber = Math.min.apply(null, numbers);    // apply는 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용한다.
const maxNumber = Math.max.call(null, ...numbers);
console.log(minNumber); // 1
console.log(maxNumber); // 10



// bind - 함수의 this 값을 영구히 바꿀 수 있다.
const jane = {
    name: 'Jane',
};
function updateUser2(bDay, job){
    this.bDay = bDay;
    this.job = job;
}
const updateJane = updateUser2.bind(jane);
updateJane(1995, 'singer');
console.log(jane);  // {name: 'Jane', bDay: 1995, job: 'singer'}


const user = {
    name: 'Mike',
    showName: function(){
        console.log(`hello, ${this.name}`);
    },
};
user.showName();
let fn = user.showName;
fn();       // 'hello, '

let boundFn = fn.bind(user);
boundFn();  // 'hello, Mike'