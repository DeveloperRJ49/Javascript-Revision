class stack{
    constructor(){
        this.stackname = "hello jignesh";
        this.items = [];
        this.tail = this.items.length ;
        this.head = 0;
        console.log("head :-" + this.head);
        this.temp =[];
    }
    chek(){
        if (this.stackname == 0) {
            console.log(true);
        } else {
            console.log(false);
            for (let i = 0; i < this.stackname.length; i++) {
                // arr.push(stack[i]);
                this.items[this.items.length] = this.stackname[i];
            }
            console.log(this.items);
            this.tail = this.items.length ;
            console.log("tail:"+this.tail);
        }
    }
    arrempty(){
        return this.items.length === 0 ? true : false;
    }
    reversepush(){
        for(let k = this.head; k < this.items.length; k++){
            this.temp[k] = this.items[--this.tail];
            console.log(this.temp);
        }
    }
    print(){
        for(let j=this.head; j<this.temp.length; j++){
            this.items[j]=this.temp[j];
        }
        console.log("main arr " + this.items);
        console.log(this.items);
    }

}

let reverse =new stack;
reverse.chek();
console.log(reverse.arrempty());
reverse.reversepush()
reverse.print()

