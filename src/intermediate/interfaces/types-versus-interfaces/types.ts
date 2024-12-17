type InputOnChange = (value: InputValue) => void;
type InputValue = string;
type InputType = 'text' | 'email';

export type InputProps = {
    value: InputValue;
    type: InputType;
    onChange: InputOnChange;
}
// --- END ---

// Unions
// Intersections (&)
// Primitive
// Shorthand Functions
// Advanced Type Functions
