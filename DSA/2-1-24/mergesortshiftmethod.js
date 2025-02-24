// let array = [6, 7, 3, 4, 9, 2, 8];

// function mergesort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//   let mid = Math.floor(array.length / 2);
//   let left = array.slice(0, mid);
//   let right = array.slice(mid);

//   return merge(mergesort(left), mergesort(right));
// }
// function merge(left, right) {
//   let temp = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       temp.push(left.shift());
//     } else {
//       temp.push(right.shift());
//     }
//   }

//   // temp = temp.concat(left).concat(right);
//   // return temp;
//   return [...temp,...left,...right];

// }
// const result = mergesort(array);
// console.log(result);

let array = [6, 7, 3, 4, 9, 2, 8];
let si = 0;
let ei = array.length - 1;

function mergesort(array, si, ei) {
  if (si >= ei) {
    return;
  }
  let mid = Math.floor((si + ei) / 2);

  //left array
  const array1 = [];
  for (let i = si; i <= mid; i++) {
    array1.push(array[i]);
  }
  // let lsi = 0;
  // let lei = array1.length - 1;
  console.log(array1, "left");

  //right array
  const array2 = [];
  for (let j = mid + 1; j <= ei; j++) {
    array2.push(array[j]);
  }
  // let rsi = 0;
  // let rei = array2.length - 1;
  console.log(array2, "rigth");

  mergesort(array, si, mid);
  mergesort(array, mid + 1, ei);
  merge(array1,array2);
}
function merge(array1,array2) {
  let temp = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (array1.length && array2.length) {
    if (array1[i] >= array2[j]) {
      // temp.push(array1.shift());
      temp[k] = array1[i];
      i++;
    } else {
      // temp.push(array2.shift());
      temp[k] = array2[j];
      j++
    }
    k++;
  }

  while (i < array1.length) {
		temp[k] = array1[i];
		i++;
		k++;
	}

  while (j < array2.length) {
		temp[k] = array2[j];
		j++;
		k++;
	}

  
}
const result = mergesort(array, si, ei);
console.log(result);




