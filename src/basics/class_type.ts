class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved to ${distanceInMeters}m.`)
    }
}

let cat = new Animal("Cat");
cat.move(2);
// cat.name = "Dog"; // Not access to cat name.

class Bird extends Animal {
    public move(distanceInMeters: number): void {
        // this.name is not access because name of Animal PRIVATE.
        // Worked when name is protected
        console.log(`${this.name} moved to ${distanceInMeters}m.`)
    }
}