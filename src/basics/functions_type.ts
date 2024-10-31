function add (a: number, b: number): number {
    return a + b;
}

function log (message: string): void {
    console.log("LOG", message);
}

function sum (...values: number[]) {
    return values.reduce((previous: number, current: number) => {
        return previous + current;
    });
}

sum(1, 2); // 3
sum(1, 2, 3); // 6

// First class function
type Add = (a: number, b: number) => number; // TS
let fnAdd: Add;
fnAdd = function (a: number, b: number): number {
    return a + b;
};
// add = (a, b) => a + b; // JS
