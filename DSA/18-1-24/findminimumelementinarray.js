class peek{
    constructor() {
      this.array = [5,6,3,8,14,14,36,84,7,9,4];
    }
    findpeek() {
      let min = this.array[0];
      for (let i = 0; i < this.array.length; i++) {
        if ( this.array[i] < min) {
          min = this.array[i];
        }
      }
      console.log(`this is max value peek = ${min}`);
    }
  }
  
  let peekelement = new peek();
  peekelement.findpeek();