function addFullName_1<T>(obj: T): T {
    return obj;
}

function addFullName_2<T>(obj: T): T {
    return {
        ...obj
    };
}

type NameFields = { firstName: string; lastName: string };
function addFullName_3<T extends NameFields>(obj: T): T & { fullName: string} {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
    };
}

const john = addFullName_3({
    email: 'john@exmaple.com',
    firstName: 'John',
    lastName: 'Doe',
});
console.log(john.email); // 'john@exmaple.com';
console.log(john.fullName); // 'John Doe';

// TS2345: Argument of type { firstName: string; } is not assignable toparameter of type NameFields
// Property lastName is missing in type { firstName: string; } but required in type NameFields
// generic-constraints. ts(11, 40): lastName is declared here.
// Without lastName.
// const jane = addFullName_3({ firstName: 'Jane'});
const jane = addFullName_3({ firstName: 'Jane', lastName: 'Doe' });
