let stackarr = [];

const stackprint = (stackarr) => {
  if (stackarr.length === 0) {
    console.log("underflow");
  } else {
    for (let i = 0; i < stackarr.length; i++) {
      console.log(stackarr);
    }
    // console.log(stack);
  }
};
const stackadd = (stackarr, element) => {
  if (stackarr.length > 4) {
    console.log("overflow");
  } else {
    stackarr[stackarr.length] = element;
    // stackarr.push(element);
  }
};

const stackremove = (stackarr) => {
  if (stackarr.length === 0) {
    console.log("Underflow");
  } else {
    // let remitem = stackarr.pop();
    // console.log(remitem);
    // return stackarr[stackarr.length--];
    stackarr[stackarr.length--];
  }
};

// stackadd(stackarr, 2);
// stackadd(stackarr, 4);
// stackadd(stackarr, 5);
// stackadd(stackarr, 6);
// stackadd(stackarr, 7);
// stackadd(stackarr, 8);
stackprint(stackarr);
// stackremove(stackarr);
// stackprint(stackarr);
