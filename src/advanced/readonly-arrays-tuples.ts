// Readonly
function reverseSorted(input: readonly number[]): number[] {
    // Without readonly
    // return input.sort().reverse();
    // With readonly
    return input.slice().sort().reverse();
}
const start: number[] = [1, 2, 3, 4, 5];
const result_RAT: number[] = reverseSorted(start);
console.log(result_RAT); // [5, 4, 3, 2, 1];
// Without readonly
console.log(start); // [5, 4, 3, 2, 1];
// With readonly
console.log(start); // [1, 2, 3, 4, 5];
type RArray = readonly number[];
type RGArray = ReadonlyArray<number>;
// --- END ---

// Tuple
// With readonly
// TS2540: Cannot assign to 0 because it is a read-only property.
type Point_RAT = readonly [number, number];
function move(point: Point_RAT, x: number, y: number): Point_RAT {
    // Without readonly
    // point[0] += x;
    // point[1] += x;
    // return point;
    // With readonly
    return [point[0] + x, point[1] + y];
}
const point_rat: Point_RAT = [ 0, 0 ];
const move_rat: Point_RAT = move( point_rat, 10, 10 );
console.log(move_rat); // [10, 10];
// Without readonly
console.log(point_rat); // [10, 10];
// With readonly
console.log(point_rat); // [0, 0];
