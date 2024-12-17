export interface InputProps  {
    value: string;
    type: 'text' | 'email';
    onChange: (value: string) => void;
}
// --- END ---

// Declaration Merging
// Familiarity (extends)