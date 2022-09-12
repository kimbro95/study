/*
- Class(클래스)
- ES6에 추가
*/

// Class
// 생성자 함수를 이용한 방법
const User1 = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    };
};
const mike = new User1('Mike', 30);
console.log(mike);  // {name: 'Mike', age: 30, showName: ƒ} <= showName() 출력


// Class를 이용한 방법
class User2 {
    // constructor는 객체를 만들어주는 생성자 메소드
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){ // 클래스내에 정의한 메소드(showName())는 User2의 프로토타입에 저장된다.
        console.log(this.name);
    }
}
const jane = new User2('Jane', 29);
console.log(jane);   // User2 {name: 'Tom', age: 29} <= showName()은 프로토타입에 저장되기 때문에 출력 x

const mike2 = User1('Mike', 30);
console.log(mike2); // undefined => 생성자함수는 new가 없어도 실행되고 undefined를 출력

// const jane2 = User2('Jane', 29);
// console.log(jane2); // error    => class는 new 없이 실행 할 수 없다.



// Class 상속 - extends
class car1 {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log('drive...');
    }
    stop(){
        console.log('stop...');
    }
}

class Bmw extends car1{
    park(){
        console.log('parking...');
    }
}
const x5 = new Bmw('Blue');
console.log(x5.color);  // 'Blue'
x5.drive();             // 'drive...'
x5.park();              // 'parking...'



// Class Method Overriding(메소드 오버라이딩)
class car2 {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log('drive...');
    }
    stop(){
        console.log('stop...');
    }
}

class Benz extends car2{
    stop(){
        //super.stop();    => 부모의 메소드를 그대로 사용하면서 확장하려는 경우 super를 이용 <= Method Overriding(메소드 오버라이딩)
        console.log('plz stop');
    }
}
const eClass = new Benz('white');
eClass.stop();  // 'plz stop' => 동일한 이름으로 메소드를 정의하면 덮어쓴다.



// Class Overriding(오버라이딩)
class Audi extends car2{
    constructor(color){  // 자식 클래스의 constructor에 동일한 인수를 받는 작업을 해줘야한다. color를 받고 super에 넘겨줘야한다.
        super(color);    // extends를 사용해 만든 자식 클래스는 빈 객체를 만들고 this를 할당하는 작업을 건너뛴다. 그래서 super() 키워드로 부모클래스의 constructor를 실행해줘야한다.
        this.navigation = 1;
    }
    park(){
        console.log('park...');
    }
}
const a6 = new Audi('black');
console.log(a6);    // {color: 'black', wheels: 4, navigation: 1}