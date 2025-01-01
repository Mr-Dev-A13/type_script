function reverse(string: string): string;
function reverse(stringArray: string[]): string[];

function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}
const hello_FO: string = reverse('hello'); // olleh;
const h_e_l_l_o_FO: string[] = reverse(['h','e','l','l','o']); // ['o', 'l', 'l', 'e', 'h'];
// --- END ---

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}
const doomsday: Date = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch: Date = makeDate(0); // 1 Jun 1970
// --- END ---
