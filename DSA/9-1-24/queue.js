let queuearr = [];
let head = 0;
let tial = queuearr.length - 1;
let size = 5;

const queuepush = (queuearr, element) => {
  if (queuearr.length > 5) {
    console.log("queue is overflow");
  } else {
    queuearr[queuearr.length] = element;
    console.log(queuearr);
    tial = queuearr.length - 1;
  }
};
const queueremove = (head, tial, queuearr) => {
  if (head == 0 && tial == -1) {
    console.log("the queue is empty");
  } else {
    for (let i = queuearr.length; i >= head; i--) {
      queuearr[i] = queuearr[i - 1];
    }
    queuearr[head - 1] = head--;
    console.log(queuearr);
    // console.log(queuearr);
    // queuearr.shift();
    // console.log(queuearr);
  }
};
// console.log(head,tial);
queuepush(queuearr, 5);
queuepush(queuearr, 6);
queuepush(queuearr, 7);
queuepush(queuearr, 8);
queuepush(queuearr, 9);
queuepush(queuearr, 10);
queuepush(queuearr, 11);
queueremove(head, tial, queuearr); // should print 5
