type Point2DOfType = {
    x: number,
    y: number,
};
type Point3DOfType = Point2DOfType & {
    z: number,
};
export const pointOfTypes: Point3DOfType = {
    x: 1,
    y: 2,
    z: 3,
};