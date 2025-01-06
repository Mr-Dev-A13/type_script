type Person_KTO = {
    name: string,
    age: number,
    location: string,
};
const jon_KTO: Person_KTO = {
    name: 'Jon',
    age: 35,
    location: 'Mall',
};
// Without key types.
// function logGet (obj: any, key: string) {
// SOLUTION 1 keyof.
// function logGet (obj: Person_KTO, key: keyof Person_KTO) {
// SOLUTION 2 Generic types.
function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}
const age: number = logGet(jon_KTO, 'age'); // 35;
// Without key types not show error
// TS2345: Argument of type "email" is not assignable
// to parameter of type "name" | "age" | "location"
// console.log(logGet(jon_KTO, 'email')); // Error

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]): void {
    console.log('Setting:', key, value);
    obj[key] = value;
}
logSet(jon_KTO, "age", 36);
