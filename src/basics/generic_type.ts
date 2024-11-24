/** A FIFO (First in First out) collection */

class Queue<T> {
    data: T[] = [];
    push(item: T): void { this.data.push(item); }
    pop(): T {
        return this.data.shift() as T;
    }
}

let queue: Queue<number> = new Queue<number>();
queue.push(321);
queue.push(123);

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));