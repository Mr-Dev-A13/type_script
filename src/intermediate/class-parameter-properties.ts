class BasePerson_1 {
    name: string;
    age: number;

    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age;
    }
}

//  equal to this

class BasePerson_2 {
    // private, protected, static.
    constructor(
        public name: string,
        public age: number,
    ) {}
}

const adam_1: BasePerson_1 = new BasePerson_2("Adam_1", 120000000);
const adam_2: BasePerson_2 = new BasePerson_2("Adam_2", 120000000);
console.log(adam_1.name, adam_1.age);
console.log(adam_2.name, adam_2.age);