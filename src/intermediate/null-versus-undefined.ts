let notDefined_1: undefined = undefined;
let notPrevent: null = null;
// --- END ---

class PointOfNullUndefined {
    x: number | undefined;
    y: number | undefined;
}
const centerOfNullUndefined = new PointOfNullUndefined();
centerOfNullUndefined.x = 0;
// centerOfNullUndefined.y = 0;
console.log(centerOfNullUndefined.x, centerOfNullUndefined.y); // 0, undefined;
// --- END ---

function logVowels (value: string): void {
    console.log(value.match(/aeiou/gi));
}
logVowels("hello"); // ['e', 'o'];
logVowels("sky"); // null;
// --- END ---

console.log(null == null); // true;
console.log(undefined == undefined); // true;
console.log(null == undefined); // true;
console.log(false == null); // false;
console.log(0 == null); // false;
console.log("" == null); // false;
// --- END ---

function decorate(value: string | null | undefined): string | null | undefined {
    if (value == null) {
        return value;
    }
    return `<--- ${value.trim()} --->`;
}
console.log(decorate("Hello")); // Hello;
console.log(decorate("Hello World    ")); // "Hello World;
console.log(decorate(null)); // null;
console.log(decorate(undefined)); // undefined;