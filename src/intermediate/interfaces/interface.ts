interface Point2DOfInterface {
    x: number,
    y: number,
}
interface Point3DOfInterface extends Point2DOfInterface {
    z: number
}
export const pointOfIntersection: Point3DOfInterface = {
    x: 1,
    y: 2,
    z: 3,
}