// Array
let arr: number[] = [1, 2, 3];

// Usage
arr = [1];
arr = [1, 2, 3, 4, 5];
// arr = ["hello"]; //error;

// Tuple
let tuple: [number, number] = [1, 2];

// Usage
tuple = [1, 2];
tuple = [3, 4];
// tuple = [5, 6, 7]; //error: must be 2 items
// tuple = [8]; //error: must be 2 items
// tuple = ["atom", 643]; //error: must be number