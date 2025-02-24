class peek{
  constructor() {
    this.array = [4, 6, 7, 9, 2, 1, 3, 57, 11, 66, 22, 13, 16, 18, 19];
    this.maxpeek = this.array[0];
}
findpeek() {
    for (let i = 0; i < this.array.length; i++) {
      if ( this.array[i] > this.maxpeek) {
        this.maxpeek = this.array[i];
      }
    }
    console.log(`this is max value peek = ${this.maxpeek}`);
  }
}

let peekelement = new peek();
peekelement.findpeek();
