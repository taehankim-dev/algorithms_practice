const problem = `9
0
12345678
1
2
0
0
0
0
32`


class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(indexA, indexB) {
    [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.upHeap();
    return this.heap.length;
  }

  pop() {
    if (this.heap.length === 0) {
      return undefined;
    }
    this.swap(0, this.heap.length - 1);
    const value = this.heap.pop();
    this.downHeap(0);
    return value;
  }

  upHeap() {
    let current = this.heap.length - 1;

    while (0 < current) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[parent] <= this.heap[current]) {
        return;
      }
      this.swap(parent, current);
      current = parent;
    }
  }

  downHeap(idx) {
    let current = idx;

    while (current < this.heap.length) {
      // CBT 구조 특징 : 특정 idx의 자식 노드 -> idx*2+1, idx*2+2
      let leftChild = current * 2 + 1;
      let rightChild = current * 2 + 2;

      if (this.heap[leftChild] === undefined) {
        break;
      }
      if (this.heap[rightChild] === undefined) {
        if (this.heap[current] <= this.heap[leftChild]) {
          break;
        }
        this.swap(current, leftChild);
        current = leftChild;
        continue;
      }
      const nextChild = this.heap[leftChild] <= this.heap[rightChild] ? leftChild : rightChild;
      if (this.heap[current] <= this.heap[nextChild]) {
        break;
      }
      this.swap(current, nextChild);
      current = nextChild;
    }
  }
}

// const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const [N, ...arr] = problem.toString().trim().split('\n').map(Number)
const pq = new MinHeap();
console.log(
  arr
    .reduce((acc, cur) => {
      if (cur === 0) {
        acc.push(pq.pop() ?? 0);
        return acc;
      }
      pq.push(cur);
      return acc;
    }, [])
    .join("\n")
);