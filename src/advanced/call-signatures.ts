type Add_CS_1 = (a: number, b: number) => number; // Function type long
type Add_CS = {
    (a: number, b: number): number, // function short
    (a: number, b: number, c: number): number,
    debugName?: string,
};

const add_CS: Add_CS = (a: number, b: number, c?: number): number => {
    return a + b + (c != null ? c : 0);
};
add_CS.debugName = "Addition Function";
// --- END ---

type PointCreator_CS_1 = new (x: number, y: number) => {x: number, y: number}; // Class type long
type PointCreator_CS = {
    new (x: number, y: number): { x: number, y: number }, // class type short
    new (x: number, y: number, z: number): { x: number, y: number, z: number },
    (x: number, y: number): { x: number, y: number }, // function type short
    (x: number, y: number, z: number): { x: number, y: number, z: number },
}

const PointCreator_CS: PointCreator_CS_1 = class {
    constructor(public x: number, public y: number) {}
}
// --- END ---
