type Point2D_DA = { x: number; y: number };
type Point3D_DA = { x: number; y: number, z: number };
type Point_DA = { name: string; email: string };

let point2D_DA: Point2D_DA = { x: 0, y: 0 };
let point3D_DA: Point3D_DA = { x: 0, y: 0, z: 0 };
let point_DA: Point_DA = { name: 'jon', email: 'jon@example.com' };

point2D_DA = point3D_DA;
// TS2741: Property z is missing in type Point2D_DA but
// required in type Point3D_DA double-assertion. ts(2, 43): z is declared here.
// point3D_DA = point2D_DA; // Error
point3D_DA = point2D_DA as Point3D_DA;

// point_DA = point3D_DA; // Error
// point3D_DA = point_DA; // Error
// TS2352: Conversion of type Point_DA to type Point3D_DA may be a mistake because
// neither type sufficiently overlaps with the other. If this was intentional,
// convert the expression to unknown first. Type Point_DA is missing the following
// properties from type Point3D_DA: x, y, z
// point3D_DA = point_DA as Point3D_DA; // Error
point3D_DA = point_DA as unknown as Point3D_DA; // OK
