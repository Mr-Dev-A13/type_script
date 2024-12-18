type AnimalOfImplements = {
    name: string,
    voice(): string,
};
function log(animal: AnimalOfImplements) {
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
log(new DogOfImplements('Recs'));
log(new CatOfImplements('Catty'));
// --- END ---
