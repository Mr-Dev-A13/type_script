class Person {
    private _age: number;
    constructor(_age: number) {
        this._age = _age;
    }
    growOld = () => {
        this._age++;
    }
    age () {
        return this._age;
    }
}

let person = new Person(1);
// person.growOld();
const growOld = person.growOld;
setTimeout(person.growOld, 1000);
growOld();
setTimeout(() => console.log("age =>", person.age()), 2000);
