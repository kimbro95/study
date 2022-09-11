/*
- Inheritance(상속)
*/

// hasOwnProperty - 객체에 자신이 프로퍼티를 가지고있는지 확인하는 메소드
// user => __proto__ => hasOwnProperty - 객체에서 프로퍼티를 읽을때 없으면 __proto__(Prototype)에서 찾는다.
const user1 = {
    name: 'Mike',
};
console.log(user1.hasOwnProperty('name'));  // true
console.log(user1.hasOwnProperty('age'));   // false

// 객체에 프로퍼티값 있을경우에는 탐색을 멈춘다. 없을때만 __proto__(Prototype)에서 프로퍼티를 찾는다.
const user2 = {
    name: 'Jane',
    hasOwnProperty: function(){
        console.log('hello');
    }
};
user2.hasOwnProperty();  // 'hello'



// Prototype Chain
// car라는 상위개념의 객체
const car = {
    wheels: 4,
    drive() {
        console.log('drive...');
    },
};
// 하위개념 객체들
const bmw = {
    color: 'blue',
    navigation: 1,
};

// car객체가 bmw의 프로토타입이 된다. => bmw 객체는 car객체를 상속 받는 것.
bmw.__proto__ = car;
console.log(bmw);           // {color: 'blue'}
console.log(bmw.color);     // 'blue'
console.log(bmw.wheels);    // 4    => bmw 객체 내부에서 wheels 프로퍼티를 찾는다. 찾으면 탐색을 멈추고 만약에 __proto__(Prototype)에서 프로퍼티를 찾는다.

// 상속을 계속해서 이어질 수 있다.
const x5 = {
    color: 'white',
    name: 'x5',
};
x5.__proto__ = bmw;
console.log(x5.name);       // 'x5'
console.log(x5.color);      // 'white'  => x5 객체 내부에 color가 있기에 blue가 아닌 white 를 출력
console.log(x5.navigation); // 1 => 프로토타입이된 bmw객체의 navigation



// for in 객체 프로퍼티 접근
for(p in x5){
    console.log(p); // 'color' , 'name', 'navigation', 'wheels', 'drive'
}
// for in + hasOwnProperty로 접근 => hasOwnProperty는 객체가 직접 가지고있는 프로퍼티만 true를 반환한다.
for(p in x5){
    if(x5.hasOwnProperty(p)){
        console.log(true, p);
    } else {
        console.log(false, p);
    }
}

// key, values 메소드는 상속된 프로퍼티는 나오지 않는다.
console.log(Object.keys(x5));   // ['color', 'name']
console.log(Object.values(x5)); // ['white', 'x5']



// 생성자 함수를 이용하여 상속하기
const Kia = function(color){
    this.color = color;
};
Kia.prototype.wheels = 4;
Kia.prototype.drive = function() {
    console.log('drive...');
};
Kia.prototype.stop = function(){
    console.log('stop...');
};

const k3 = new Kia('green');
console.log(k3);        // {color: 'green'}
console.log(k3.color);  // 'green'
k3.drive(); // 'drive...'
k3.stop();  // 'stop...'


// Closure(클로저)를 이용하여 캡슐화하기 = 초기 color 설정값을 얻을 수 만 있고 바꿀수는 없게하기
const Benz = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    };
};
const eClass = new Benz('white');
eClass.color = 'Black';
eClass.getColor();