/**
 * @param input a comment or an array of comments
 * @return a string trimmed string
 */
function formatCommandLine (input: string | string[]) {
    let line: string = "";
    if (typeof input === "string") {
        line = input.trim()
    } else {
        line = input.map(x => x.trim()).join(" ");
    }
    return line;
}

console.log(formatCommandLine("hello  ")); // "hello";
console.log(formatCommandLine(["hello", "world"])); // "hello world";
// TS2345: Argument of type number is not assignable to parameter of type string | string[]
// console.log(formatCommandLine(  1234)); // Error;

/**
 * Takes a string and adds 'padding' to the left.
 * If 'padding' is a number, then that number of space is added to the left.
 * If 'padding' is a string, then 'padding' is appended to the left.
 */
type Padding =
    | number
    | string;

function padLeft (value: string, padding: Padding) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding == "string") {
        return padding + value;
    }
    throw new Error(`Expected number or string, got ${padding}.`)
}

console.log(padLeft("Hello World", 4)); // "    Hello World";
console.log(padLeft("Hello World", '  ')); // "  Hello World";
console.log(padLeft("Hello World", '---')); // "---Hello World";
// TS2345: Argument of type boolean is not assignable to parameter of type string | number.
// console.log(padLeft("Hello World", false)); // "---Hello World";