/*
- 교차 타입(Intersection Types)
*/

// 교차타입 - 여러개의 타입을 하나로 합쳐주는 역할
interface IntersectionCar {
    name: string;
    start(): void;
}

interface IntersectionToy {
    name: string;
    color: string;
    price: number;
}

// 유니온 타입과 다르게 AND를 의미 ex) IntersectionCar 과 IntersectionToy
const toyCar: IntersectionToy & IntersectionCar = {
    name: "tayo",
    start() {
    },
    color: "blue",
    price: 1000,
}