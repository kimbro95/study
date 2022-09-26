/*
- 클래스 타입(Class Types)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
var ClassCar = /** @class */ (function () {
    function ClassCar(color) {
        this.color = color;
    }
    ClassCar.prototype.start = function () {
        console.log("Start...");
    };
    return ClassCar;
}());
var classBMW = new ClassCar("red");
// 접근 제한자(Accecc Modifier) - public, private, protected
/*
public - 자식클래스, 클래스 인스턴스 모두 접근가능
명시하지 않을 경우 기본 타입
ex) ClassCar2의 public name으로 명시하면 ClassBMW2 또는 ClassZ4에서도 접근 할 수 있다.

private - 해당 클래스 내부에서만 접근 가능
ex) ClassCar2의 private name으로 명시하면 ClassCar2내에서만 사용이 가능하고 ClassBMW2 또는 ClassZ4에서 접근 할 수 없다.

protected - 자식 클래스에서만 접근 가능
private name은 #name 으로도 명시 가능하다.
ex)ClassCar2의 protected name으로 명시하면 자식 클래스인 ClassCar2에서는 접근 가능하지만 클래스 인스턴스인 ClassZ4에서는 접근 할 수 없다.

readonly - 읽기전용 프로퍼티

static - 정적 멤버 변수
static 키워드를 이용한 변수는 this가 아닌 클래스 명을 이용하여 접근한다.
*/
var ClassCar2 = /** @class */ (function () {
    function ClassCar2(color, name) {
        this.name = "car";
        this.color = color;
        this.name = name;
    }
    ClassCar2.prototype.start = function () {
        console.log('start...');
        console.log(this.name);
        console.log(ClassCar2.wheels); // static
    };
    ClassCar2.wheels = 4;
    return ClassCar2;
}());
var ClassBMW2 = /** @class */ (function (_super) {
    __extends(ClassBMW2, _super);
    function ClassBMW2(color, name) {
        return _super.call(this, color, name) || this;
    }
    ClassBMW2.prototype.showName = function () {
        console.log(this.name);
    };
    return ClassBMW2;
}(ClassCar2));
var ClassZ4 = new ClassBMW2('white', 'Z4');
//ClassZ4.name = 'z4' // readonly를 명시하면 변경 불가 => ClassCar2의 constructor name을 추가하고 자식클래스 constructor 와 super에 추가하여야한다.
console.log(ClassCar2.wheels); // static
/* 추상 class
추상 클래스 내부에 추상메소드(abstract doSomething())는 반드시 상속받은 쪽에서 구체적은 구현을 해야한다.
*/
var ClassCar3 = /** @class */ (function () {
    function ClassCar3(color) {
        this.color = color;
    }
    ClassCar3.prototype.start = function () {
        console.log('start');
    };
    return ClassCar3;
}());
//const car3 = new ClassCar3("red");  // 추상 클래스는 new를 사용하여 접근할 수 없다. 아래와 같이 상속을 통해서 접근해야한다.
var BMW3 = /** @class */ (function (_super) {
    __extends(BMW3, _super);
    function BMW3(color) {
        return _super.call(this, color) || this;
    }
    BMW3.prototype.doSomething = function () {
        console.log('doSomething...'); // 추상메소드(abstract doSomething())가 구현된 곳
    };
    return BMW3;
}(ClassCar3));
var x5 = new BMW3('black');
