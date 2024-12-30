type AnimalOfImplements = {
    name: string,
    voice(): string,
};
function logOfKeyword(animal: AnimalOfImplements): void {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class DogOfImplements implements AnimalOfImplements {
    constructor(public name: string) {}
    voice() {
        return "Meow";
    }
}
class CatOfImplements implements AnimalOfImplements {
    constructor(public name: string) {}
    voice() {
        return "Woof";
    }
}
logOfKeyword(new DogOfImplements('Recs'));
logOfKeyword(new CatOfImplements('Catty'));
// --- END ---
