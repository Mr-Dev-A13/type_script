type CircleWithKind = {
    kind: "circle",
    radius: number,
};
type SquareWithKind = {
    kind: "square",
    size: number,
};
type RectangleWithKind = {
    kind: "rectangle",
    width: number,
    height: number,
};
type ShapeWithKind =
    | CircleWithKind
    | SquareWithKind
    | RectangleWithKind;
function area(shape: ShapeWithKind) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius;
    }
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}

type ValidationSuccess = {
    isValid: true,
    validationValue: string,
};
type ValidationFailure = {
    isValid: false,
    errorReason: string,
};
type ValidationResult =
    | ValidationSuccess
    | ValidationFailure;
function logResult(result: ValidationResult) {
    if(result.isValid) {
        console.log("Success validation value: ", result.validationValue);
    }
    if(result.isValid === false) {
        console.error("Failure error reason: ", result.errorReason);
    }
}
