type Person_AF = {
    name: string;
    dataOfBirth?: Date,
};
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

function assertData(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new TypeError('Value is not a Date');
}

function loadPerson(person?: Person_AF): Person_AF | null {
    if (person) {
        return person;
    } else {
        return null;
    }
}

const maybePerson: Person_AF | null = loadPerson();

assert(maybePerson != null, 'Could not load person');
// TS18047: maybePerson is possibly null
console.log('Name', maybePerson.name);

assertData(maybePerson.dataOfBirth);
console.log('Data of Birth', maybePerson.dataOfBirth.toISOString());

// Application Code
// User Defined
// Type Guards

// Application Tests
// Assertion
// Functions
