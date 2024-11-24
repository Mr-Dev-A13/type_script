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

