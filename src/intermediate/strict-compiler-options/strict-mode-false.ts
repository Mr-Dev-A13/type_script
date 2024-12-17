// TS7044: Parameter (first, second) implicitly has an any type,
// but a better type may be inferred from usage.

// function add (first, second) {
//     return first + second;
// }
console.log(add(1, 3)); // 4;
// console.log(add("Hello", " World")); // "Hello World";
// --- END ---

// class PointForStrictModeFalse {
//     x: number;
//     y: number;
//
//     move (x: number, y: number) {
//         this.x += x;
//         this.y += y;
//     }
// }
//
// // Create
// const pointForStrictModeFalse: PointForStrictModeFalse = new PointForStrictModeFalse();
//
// // Use
// pointForStrictModeFalse.move(1, 3);
// console.log(pointForStrictModeFalse.x, pointForStrictModeFalse.y);
// --- END ---

type UserForStrictModeFalse = {
    name: string, age: number,
}
const UserForStrictModeFalse: UserForStrictModeFalse[] = [
    {name: "Jon", age: 13},
    {name: "Milena", age: 31},
];
// function getUserAgeForStrictModeFalse(name: string): number {
//     const user = UserForStrictModeFalse.find(
//         (user: UserForStrictModeFalse) => user.name === name
//     );
//
//     return user.age;
// }

// --- END ---
// False -> Dynamic, Teaching.