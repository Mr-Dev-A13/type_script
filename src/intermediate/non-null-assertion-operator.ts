type PointOfNonNull = {
    x: number,
    y: number,
};

let pointOfNonNull_1: PointOfNonNull;
function initialize_1() {
    return pointOfNonNull_1 = { x: 0, y: 0 };
}
initialize_1();
// TS2454: Variable pointOfNonNull is used before being assigned.
// Solution -> !
console.log(pointOfNonNull_1!.x, pointOfNonNull_1!.y);
// --- END ---

// Other Solution
function initialize_2(): PointOfNonNull {
    return { x: 0, y: 0 };
};
const pointOfNonNull_2 = initialize_2();
console.log(pointOfNonNull_2.x, pointOfNonNull_2.y);
// --- END ---

type PersonOfNonNull = {
    name: string,
    email?: string | null | undefined,
};

function sendEmail(email: string) {
    console.log("Send mail to ", email);
}
function ensureContactable(person: PersonOfNonNull) {
    if (person.email == null) throw new Error(`Person ${person.name} is not contactable!`);
}
function contact_1(person: PersonOfNonNull) {
    ensureContactable(person);
    // TS2345: Argument of type string | null | undefined is not assignable to parameter of type string
    // Type undefined is not assignable to type string
    // Solution -> !
    sendEmail(person.email!);
}
// --- END ---

// Other Solution
function contact_2(person: PersonOfNonNull) {
    if (person.email == null) throw new Error(`Person ${person.name} is not contactable!`);
    sendEmail(person.email);
}
// --- END ---