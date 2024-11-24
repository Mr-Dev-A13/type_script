let castingValue;

// Later
castingValue = "13";

// use as number
// const castingNumber = castingValue as number;
// console.log(castingNumber === 13); // false;

const castingNumber = +castingValue;
console.log(castingNumber === 13); // true;
console.log(castingNumber); // 13

