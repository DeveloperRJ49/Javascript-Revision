class stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    // this.item.push(element);
    if (this.item.length > 4) {
      console.log("overflow");
    } else {
      this.item[this.item.length] = element;
    }
  }
  pop() {
    if (this.item.length === 0) {
      console.log("underflow");
    } else {
      return this.item[this.item.length--];
      // let staclpop = this.item[this.item.length--];
      // console.log(staclpop);
    }
  }
  peek() {
     return this.item[this.item.length - 1];
    //  return this.item[this.item.length - 2];
  //   let temp = this.item[this.item.length - 1];
  //   console.log(temp);
  }
  isEmpty() {
    return this.item.length == 0;
  }
  size() {
    return this.item.length;
  }
  clear() {
   return this.item = [];
  }
}

let stackarr = new stack();
stackarr.push(1);
stackarr.push(2);
stackarr.push(3);
stackarr.push(9);
stackarr.push(5);
stackarr.push(6);
console.log(stackarr.item);
stackarr.pop();
console.log(stackarr.item);
console.log(stackarr.peek());
console.log(stackarr.isEmpty());
console.log(stackarr.size());
stackarr.clear()
console.log(stackarr.item);
