class Cat {
    meow () {
        console.log("meow");
    }
}
class Dog {
    bark() {
        console.log("woof");
    }
}
type AnimalNarrowing = Cat | Dog;
function speak(animal: AnimalNarrowing) {
    if (animal instanceof Cat) {
        return animal.meow();
    }

    if (animal instanceof Dog) {
        return animal.bark()
    }
}

type Square = {
    size: number
}
type Rectangle = {
    width: number,
    height: number,
}
type Shape = Square | Rectangle;
function area(shape: Shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if ("width" in shape) {
        return shape.width * shape.height;
    }
}

console.log(area({size: 10})); // 100
console.log(area({width: 10, height: 20})); // 200