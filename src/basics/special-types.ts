let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = "asd";
exampleAny = 123;

// unknown
exampleUnknown = "asd";
exampleUnknown = 123;

// any
exampleAny.asd.bsa.apple();
let anyValue: boolean = exampleAny;

// unknown
// exampleUnknown.trim(); ---> TS18046: exampleUnknown is of type unknown
if (typeof exampleUnknown === "string") {
    exampleUnknown.trim();
}
if (typeof exampleUnknown === "boolean") {
    let unknownValue: boolean = exampleUnknown;
}

let sameLegacyVariable: unknown;

sameLegacyVariable = 123;
if (typeof sameLegacyVariable === "number") {
    sameLegacyVariable.toFixed(2);
}

sameLegacyVariable = "name";
if (typeof sameLegacyVariable === "string") {
    sameLegacyVariable.trim();
}