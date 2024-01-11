class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = this.getParentIndex(currentIndex);
  
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break; // 최소 힙 조건이 만족하면 종료
        }
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
  
        let minChildIndex = null;
  
        if (this.heap[leftChildIndex] !== undefined) {
          minChildIndex = leftChildIndex;
        }
  
        if (this.heap[rightChildIndex] !== undefined) {
          if (
            minChildIndex === null ||
            this.heap[rightChildIndex] < this.heap[minChildIndex]
          ) {
            minChildIndex = rightChildIndex;
          }
        }
  
        if (minChildIndex === null) {
          break; // 자식이 없으면 종료
        }
  
        if (this.heap[currentIndex] > this.heap[minChildIndex]) {
          this.swap(currentIndex, minChildIndex);
          currentIndex = minChildIndex;
        } else {
          break; // 최소 힙 조건이 만족하면 종료
        }
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
  
      return min;
    }
  }
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const minheap = new MinHeap();
    let counter={}
    let set=new Set()
    let answer=new Array(rains.length).fill(-1)
    
    for(let i=0;i<rains.length;i++){
        const rain=rains[i]
        if(!counter[rain]){
            counter[rain]=[]
        }
        counter[rain].push(i)
    }
    
    for(let i=0;i<rains.length;i++){
        const rain=rains[i]
        if(rain>0){  
            if(set.has(rain)){
                return []
            }
            if(counter[rain]){
                set.add(rain)
                const idx=counter[rain].shift()
                minheap.insert(idx)
            }
           
        }
        else{ // 0이 나올경우 범람된것을 제거가능함
            if(minheap.heap.length){
                let index=minheap.extractMin()
                answer[i]=rains[index]
                set.delete(rains[index])
            }
            
            else{ //제거할꼐 없으면 1
                answer[i]=1
            }
         
        }
    }
   
    return answer

};
// avoidFlood([1,1,0,0])
// avoidFlood([1,2,3,4])
// avoidFlood([1,2,0,0,2,1])
// avoidFlood([1,2,0,1,2])
// avoidFlood([1,0,2,0])
avoidFlood([1,2,0,2,3,0,1])