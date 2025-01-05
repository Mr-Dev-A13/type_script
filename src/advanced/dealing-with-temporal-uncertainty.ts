function getSuffix(str?: string): string | null {
    if (str) {
        return str;
    }
    return null;
}
let suffix: string | null = getSuffix();
if (suffix !== null) {
    // SOLUTION
    const suffixLocal: string = suffix;
    let exampleOne: string = 'jane' + suffixLocal.toUpperCase();
    ['jane', 'john'].forEach((name: string): void => {
        // TS18047: suffix is possibly null
        let exampleTwo: string = name + suffixLocal.toUpperCase();
    });
}
let example_TU: string | null = getSuffix();
if (example_TU !== null) {
    // SOLUTION
    const example_TU_Local: string = example_TU;
    setTimeout((): void => {
        // TS18047: example_TU is possibly null
        console.log(example_TU_Local.toUpperCase());
    })
}
example_TU = null;
// --- END ---
