// Target options


class Animal_1 {
    // target: "ES2015"
    // name: string;
    // target: "ESNEXT"
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    move (distance: number): void {
        console.log(`This distance is ${distance}, name id ${this.#name}`);
    }
}