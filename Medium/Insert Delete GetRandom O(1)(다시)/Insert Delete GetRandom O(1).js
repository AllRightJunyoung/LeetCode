var RandomizedSet = function() {
    this.map=new Map()
    this.array=[]
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)){
    return false
  }
  else{
    this.map.set(val,this.array.length)
    this.array.push(val)
    return true
  }  
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
   if(this.map.has(val)){
    // 1. 삭제할 값
    const index=this.map.get(val)
    
    //2. 삭제할 인덱스위치에 끝값을 넣음
    this.array[index]=this.array[this.array.length-1]

    // 3. 끝값의 키를 삭제할 인덱스값으로 설정
    this.map.set(this.array[index],index)
    this.array.pop() //끝값 삭제
    this.map.delete(val)
    return true
    
   }
   else{
    return false
   }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const idx=Math.floor(Math.random()*this.array.length)
    return this.array[idx]    
};
