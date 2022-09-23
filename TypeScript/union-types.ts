/*
- 유니온 타입(Union Types)
*/

// 유니온타입 - 동일한 속성 타입을 다르게해서 구분 할 수있게 하는것 (식별가능한 유니온 타입)
interface UnionCar {
    name: "car",
    color: string;
    start(): void;
}

interface UnionMobile {
    name: "mobile";
    color: string;
    call(): void;
}

// 교차타입과 다르게 OR를 의미 ex) UnionCar 또는 UnionMobile
function getGift(gift: UnionCar | UnionMobile) {
    console.log(gift.color);
    //gift.start();   // error
    if (gift.name === "car") {
        gift.start();
    } else {
        gift.call();
    }
}