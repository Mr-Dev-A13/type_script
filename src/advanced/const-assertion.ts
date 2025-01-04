const king = 'elvis';
// Attempt to assign to const or readonly variable
// TS2588: Cannot assign to king because it is a constant
// king = 'jon'; // Error;
const upperCased = king.toUpperCase(); // king === 'elvis';

const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
} as const;

// Attempt to assign to const or readonly variable
// TS2588: Cannot assign to king because it is a constant
// dave = {
//     name: 'gro',
//     role: 'singer',
//     skills: ['singing', 'drumming', 'headbanging'],
// };

// Without const
// dave.name = 'jon'; // ok
// dave.role = 'singer'; // ok
// dave.skills.unshift('singing'); // ok

// With const
// dave.name = 'jon'; // error
// dave.role = 'singer'; // error
// dave.skills.unshift('singing'); // error
// -- END --

function layout(settings: {
    align: 'left' | 'center' | 'right',
    padding: number,
}) {
    console.log('layout', settings);
}
const example = {
    align: 'left', // or as const,
    padding: 0,
} as const;
// Without const.
// TS2345: Argument of type { align: string; padding: number; } is not
// assignable to parameter of type
// { align: "left" | "center" | "right"; padding: number; }
// Types of property align are incompatible.
// Type string is not assignable to type "left" | "center" | "right"
layout(example);



