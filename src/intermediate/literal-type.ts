type CardinalDirection = "North" | "East" | "South" | "West";

let direction: CardinalDirection;

direction = "North";
// direction = "zxc"; // TS2322: Type "zxc" is not assignable to type CardinalDirection.
direction = "South";

function move (distanceMeters: number, direction: CardinalDirection) {
    console.log(`Moving ${distanceMeters} meters towards ${direction}`);
}

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
    return Math.floor(Math.random() * 5) + 1 as DiceValue;
}

// TS2367: This comparison appears to be unintentional because the types DiceValue and 7 have no overlap.
// if (rollDice() === 7) {
//     throw new Error("Not possible");
// }