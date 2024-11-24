let castingValue;

// Later
castingValue = "13";

// use as number
// const castingNumber = castingValue as number;
const castingNumber = +castingValue;

console.log(castingNumber === 13); // false;
console.log(castingNumber); // 13

