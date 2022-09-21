/*
- 인터페이스(interface)
*/
var user = {
    name: 'kim',
    age: 28,
    birthDay: 2000,
    1: 'A',
    2: 'B',
    3: 'F',
};
user.age = 10;
var addFn = function (x, y) {
    return x + y;
};
addFn(10, 20);
var checkAdult = function (age) {
    return age > 19;
};
checkAdult(20); // true
checkAdult(18); // false
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('start...');
    };
    return Bmw;
}());
var myCar = new Bmw('blue');
var myCar2 = {
    door: 5,
    stop: function () {
        console.log('stop...');
    },
    color: 'white',
    wheels: 4,
    start: function () {
        console.log('start...');
    }
};
