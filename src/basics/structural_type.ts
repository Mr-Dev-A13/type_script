type User = { id: string };
type Product = { id: string };

let user: User = { id: "asd-dsa" };
let product: Product = { id: "isb-bsi" };

// user = product
// product = user

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 0, y: 0 };
let point3D: Point3D = { x: 0, y: 0, z: 0 };

// Extra info ok
point2D = point3D;
function takesPoint2D (point: Point2D) {/** */}
takesPoint2D(point3D);

// Missing error info --->
// TS2345: Argument of type Point2D is not assignable to parameter of type Point3D
// Property z is missing in type Point2D but required in type Point3D
function takesPoint3D (point: Point3D) {/** */}
takesPoint3D(point2D);
