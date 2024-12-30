type Square_DTG = {
    size: number;
};
type Rectangle_DTG = {
    width: number;
    height: number;
};
type Shape_DTG = Square_DTG | Rectangle_DTG;

function isSquare(shape: Shape_DTG): shape is Square_DTG {
    return 'size' in shape;
}
function isRectangle(shape: Shape_DTG): shape is Rectangle_DTG {
    return 'width' in shape;
}
function are_DTG(shape: Shape_DTG): number {
    // Alternative way without key checking with condition line.
    // Checking with function and defined type guards.
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape;
    return _ensure;
}

