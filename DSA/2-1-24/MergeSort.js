// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	let n1 = m - l + 1;
	let n2 = r - m;

	// Create temp arrays
	let L = new Array(n1); 
	let R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (let i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (let j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	let i = 0;

	// Initial index of second subarray
	let j = 0;

	// Initial index of merged subarray
	let k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	let m = l + parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

// Function to print an array
function printArray( A, size)
{
	for (let i = 0; i < size; i++)
	console.log( A[i] );
}


let arr = [ 12, 11, 13, 5, 6, 7 ];
	let arr_size = arr.length;

	console.log( "Given array is ");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	console.log( "Sorted array is ");
	printArray(arr, arr_size);

// This code is contributed by SoumikMondal
