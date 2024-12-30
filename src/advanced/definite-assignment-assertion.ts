let dice!: number;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
// TS2454: Variable dice is used before being assigned.
// console.log(dice);
// console.log("Current dice value_1:", dice);
// console.log("Current dice value_1:", dice!);
rollDice();
// Same error.
// console.log("Current dice value_2:", dice);

console.log("Current dice value_2:", dice);
console.log("Current dice value_2:", dice);
// --- END ---

class Point_DAA {
    // TS2564: Property x has no initializer and is not definitely assigned in the constructor.
    // x: number;
    x!: number;
    y!: number;
    constructor(x: number, y: number) {
        this.moveEndom();
    }
    moveEndom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
