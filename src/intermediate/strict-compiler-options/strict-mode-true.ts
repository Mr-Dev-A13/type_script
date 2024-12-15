// TS7006: Parameter (first, second) implicitly has an any type.

function add (first: number, second: number) {
    return first + second;
}
console.log(add(1, 3)); // 4;
// console.log(add("Hello", " World")); // "Hello World";
// --- END ---

class PointForStrictModeTrue {
    // TS2564: Property (x, y) has no initializer and is not
    // definitely assigned in the constructor.
    x: number;
    y: number;

    // TS2564: -> Solution.
    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move (x: number, y: number) {
        this.x += x;
        this.y += y;
    }
}

// Create
// TS2554: Expected 2 arguments, but got 0 -> new PointForStrictModeTrue();
// TS2554: Solution -> new PointForStrictModeTrue(1, 5);
const pointForStrictModeTrue: PointForStrictModeTrue = new PointForStrictModeTrue(1, 5);

// Use
pointForStrictModeTrue.move(1, 3);
console.log(pointForStrictModeTrue.x, pointForStrictModeTrue.y);
// --- END ---

type UserForStrictModeTrue = {
    name: string, age: number,
}
const usersForStrictModeTrue: UserForStrictModeTrue[] = [
    {name: "Jon", age: 13},
    {name: "Milena", age: 31},
];
function  getUserAgeForStrictModeTrue(name: string): number {
    const user = usersForStrictModeTrue.find(
        (user: UserForStrictModeTrue) => user.name === name
    );
    return user.age;
}

// --- END ---
// TRUE -> Type Safety, Default.


