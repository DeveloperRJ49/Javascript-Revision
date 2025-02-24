class frequency {
    constructor(){
        this.array = [1,5,3,8,8,1,2,6,4,2,2,6,7,5,5,4,4];
        this.count={};
    }
    start() {
        for(let i=0;i<this.array.length; i++){
            let chek = this.array[i];
            if(this.count[chek]){
                this.count[chek] += 1;
            }
            else{
                this.count[chek] = 1;
            }

        }
        console.log(this.count);
    }
}
let element = new frequency()
element.start();

