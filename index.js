const problem = `13
0
1
2
0
0
3
2
1
0
0
0
0
0`

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   size(){
//     return this.heap.length;
//   }

//   empty(){
//     if(this.heap.length === 0) return true;
//     return false;
//   }

//   swap(indexA, indexB){
//     [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
//   }

//   insert(value){
//     this.heap.push(value);
//     this.bubbleUp();
//   }

//   bubbleUp(){
//     let current = this.heap.length - 1;

//     while(current > 0){
//       const parent = Math.floor((current - 1) / 2);
//       if(this.heap[parent] >= this.heap[current]) return;

//       this.swap(parent, current);
//       current = parent;
//     }
//   }

//   bubbleDown(index){
//     let current = index;
//     const leftChild = current * 2 + 1;
//     const rightChild = current * 2 + 2;
//     const length = this.heap.length;

//     if(leftChild < length && this.heap[leftChild] > this.heap[current]) current = leftChild;

//     if(rightChild < length && this.heap[rightChild] > this.heap[current] ) current = rightChild;

//     if(current !== index){
//       this.swap(current, index);
//       this.bubbleDown(current)
//     }

//   }

//   extractMax(){
//     if(this.heap.length === 1) return this.heap.pop();

//     const max = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.bubbleDown(0);

//     return max;
//   }
// }




class MaxHeap {
  constructor() {
      this.heap = [];
  }
  
  size() {
      return this.heap.length;
  }
  
  empty() {
      if(this.heap.length === 0) return true;
      return false;
  }
  
  swap(indexA, indexB){
      [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
  }
  
  insert(value){
      this.heap.push(value);
      this.bubbleUp();
  }
  
  bubbleUp(){
      let current = this.heap.length - 1;
      
      while(current > 0){
          const parent = Math.floor((current - 1) / 2);
          if(this.heap[parent] >= this.heap[current]) return;
          
          this.swap(parent, current);
          current = parent;
      }
  }
  
  bubbleDown(index){
      let current = index;
      const leftChild = current * 2 + 1;
      const rightChild = current * 2 + 2;
      const length = this.heap.length;
      
      if(leftChild < length && this.heap[leftChild] > this.heap[current]) current = leftChild;
      if(rightChild < length && this.heap[rightChild] > this.heap[current]) current = rightChild;
      
      if(current !== index){
          this.swap(current, index);
          this.bubbleDown(current);
      }
  }
  
  extractMax(){
      if(this.heap.length === 1) return this.heap.pop();
      
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      
      return max;
  }
}

const [n, ...arr] = problem.toString().trim().split('\n').map(v => +v)

const answer = [];
const maxHeap = new MaxHeap();
arr.forEach(v => {
  if (v == 0) {
    if (maxHeap.empty()) {
      answer.push(0);
    } else {
      answer.push(maxHeap.extractMax());
    }
  } else {
    maxHeap.insert(v);
  }
})

console.log(answer.join('\n'));
