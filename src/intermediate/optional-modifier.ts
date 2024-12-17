type PersonOptional = {
    name: string,
    age: number,
    phone?: number,
};
const jon: PersonOptional = {
    name: "Jon",
    age: 31,
    phone: 1231232131
};
const monika: PersonOptional = {
    name: "Monika",
    age: 28,
}
// --- END ---

class PointOptional {
    x?: number | null;
    y?: number;
}
const pointOptional: PointOptional = new PointOptional();
console.log(pointOptional.x); // undefined;
pointOptional.x = 0;
pointOptional.x = undefined;
pointOptional.x = null;
// --- END ---
