const arr = [1,3,5,2,4,6];
let si = 0;
let ei = arr.length - 1;

function divided(array, si, ei) {
  let mi = parseInt((array.length - 1) / 2);

  if (array.length < 2) {
    return;
  }

  //left array
  const array1 = [];
  for (let i = si; i <= mi; i++) {
    array1.push(array[i]);
  }
  let lsi = 0;
  let lei = array1.length - 1;
  console.log(array1, "left");

  //right array
  const array2 = [];
  for (let j = mi + 1; j <= ei; j++) {
    array2.push(array[j]);
  }
  let rsi = 0;
  let rei = array2.length - 1;
  console.log(array2, "rigth");

  divided(array1, lsi, lei);
  divided(array2, rsi, rei);
  marg(array1, array2);
}
//merge the two arrays in ascending order
function marg(left, rigth) {
  let i = 0;
  let j = 0;
  // let k = 0;
  let newmarg = [];
  while (i <= left.length && j <= rigth.length) {
    if (left[i] <= rigth[j]) {
      newmarg.push(left[i]);
      i++;
    } else {
      newmarg.push(rigth[j]);
      j++;
    }
  }
  
  console.log(newmarg);                     
}
divided(arr, si, ei);
