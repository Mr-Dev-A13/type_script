const strings = {
    hello: 'world',
};
console.log(strings['hello']); // 'world'
const numbers = {
    1234: '5678',
};
console.log(numbers['1234']); // '5678'
type Dictionary = {
    [key: string]: string;
};
// --- END ---

type Person_IS = {
    displayName: string,
    email: string,
};
type PersonDictionary = {
    [username: string]: Person_IS | undefined;
    // jon: Person_IS
};
// Without jon key.
// TS2741: Property jon is missing in type {} but required in type PersonDictionary
const person_IS: PersonDictionary = {
    // jon: {displayName: 'Jon', email: 'jone@gmail.com'}
}
person_IS['jack'] = { displayName: 'Jack', email: 'jacke@gmail.com' };
console.log(person_IS['jack']);
delete person_IS['jack'];
const result = person_IS['messing'];
// TS18048: result is possibly undefined
// console.log(result, result.email); // undefined, Error
