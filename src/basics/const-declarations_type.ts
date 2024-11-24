type Point_1 = { x: number, y: number };

const point: Point_1 = { x: 0, y: 0 };

// Attempt to assign to const or readonly variable. TS2588: Cannot assign to point because it is a constant.
// point = { x: 1, y: 1 };

// All other behaviours are the same as 'let';
point.x = 13;
point.y = 23;