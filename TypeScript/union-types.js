/*
- 유니온 타입(Union Types)
*/
// 교차타입과 다르게 OR를 의미 ex) UnionCar 또는 UnionMobile
function getGift(gift) {
    console.log(gift.color);
    //gift.start();   // error
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
