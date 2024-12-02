type Point_Readonly = {
    readonly x: number,
    readonly y: number,
};

const pointR: Point_Readonly = {
    x: 5,
    y: 5,
};

// Variable Assignment
// Attempt to assign to const or readonly variable.
// TS2588: Cannot assign to pointR because it is a constant
// pointR = { x: 1, y: 1 };

// Property Assignment
// pointR.x = 13;
// pointR.y = 23;

// PropertyReade
// Attempt to assign to const or readonly variable.
// TS2540: Cannot assign to x because it is a read-only property
console.log(`(${pointR.x} : ${pointR.y})`);

class AnimalBasic {
    // With readonly
    // private readonly name: string; // PRIVATE
    // protected readonly name: string; // PROTECTED

    public readonly name: string; // PUBLIC
    constructor (name: string) {
        this.name = name;
    }
}

const sheep = new AnimalBasic("Sheep");
console.log(sheep.name); // Allow
// TS2540: Cannot assign to name because it is a read-only property.
// Attempt to assign to const or readonly variable
// sheep.name = "Wolf"; // Disallow