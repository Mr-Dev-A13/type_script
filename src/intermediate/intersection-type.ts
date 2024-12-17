type Point2DOfIntersection = {
    x: number,
    y: number,
}
type Point3DOfIntersection = Point2DOfIntersection & {
    z: number
}
// --- END ---

type PersonOfIntersection = {
    name: string,
};
type EmailOfIntersection = {
    email: string,
};
type PhoneOfIntersection = {
    phone: number,
};
type ContactDetails =
    & PersonOfIntersection
    & EmailOfIntersection
    & PhoneOfIntersection;
function contactOfIntersection(details: ContactDetails) {
    console.log(details.name, details.email, details.phone);
}
// If no one property.
// TS2345: Argument of type { name: string; phone: number; } is not assignable to parameter of type ContactDetails
// Property email is missing in type { name: string; phone: number; } but required in type EmailOfIntersection
contactOfIntersection({
    name: "Jon",
    email: "jon@example.com",
    phone: 123456789
})
// --- END ---