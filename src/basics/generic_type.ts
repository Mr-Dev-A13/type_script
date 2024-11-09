/** A FIFO (First in First out) collection */

class Queue<T> {
    data = [];
    push(item: T) { this.data.push(item); }
    pop(): T { this.data.shift(); }
}

let queue = new Queue<number>();
queue.push(321);
queue.push(123);

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));