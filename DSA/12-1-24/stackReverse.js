let stack = "hello jignesh";
let arr = [];
let head = 0;
console.log("head :- "+head);
let tail = arr.length ;

function stackempty(stack) {
    if (stack == 0) {
        console.log(true);
    } else {
        console.log(false);
        for (let i = 0; i < stack.length; i++) {
            // arr.push(stack[i]);
            arr[arr.length] = stack[i];
        }
        console.log(arr);
        tail = arr.length ;
        console.log("tail:"+tail);
    }
}
function arrempty(arr) {
  return arr.length === 0 ? true : false;
}
let temp =[];

function reversestack(head,tail,arr){
    // console.log(head);
    // console.log(tail);
    for(let k = head; k < arr.length; k++){
        temp[k] = arr[--tail];
        // temp[k] = arr.pop();
        // arr[head] = temp[k];
        // console.log(tail);
        console.log(temp);
        // arr[k]=temp[k];
        // console.log(arr);
    }
}
function print(temp){
    for(let j=head; j<temp.length; j++){
        arr[j]=temp[j];
    }
    console.log("main arr "+arr);
    console.log(arr);
}
  

stackempty(stack);
console.log("Is array empty? ", arrempty(arr));
reversestack(head,tail,arr);
print(temp);

