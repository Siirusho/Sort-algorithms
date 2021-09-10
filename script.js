function bubbleSort(arr) {
    for (let i = 0; i <  arr.length; i++) {
        for (let j = 0; j <  arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
               [arr[j+1], arr[j]]=[arr[j], arr[j+1]]
            }
        }
    }
    return arr;
};
//bubbleSort([2,5,3,1,4,6])

function bubbleSort2(arr){
  let swapped = true
  while(swapped){
    swapped = false;
    for(let i = 0; i<arr.length; i++){
      if (arr[i] > arr[i + 1]) {
        [arr[i+1], arr[i]]=[arr[i], arr[i+1]]
          swapped = true
      }
    }
  }return arr
}
//bubbleSort2([2,5,3,1,4,6])

function selectionSort(arr){
  for (let i = 0; i <  arr.length; i++) {
        for (let j = i + 1; j <  arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]]=[arr[j], arr[i]]
            }
        }
    }
    return arr
} 
//selectionSort([2,5,3,1,4,6])

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       while(arr[i-1] > arr[i]){
        
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
//       }
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i-1; 
        while ((j > -1) && (current < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
  return arr;
}
//insertionSort([2,5,3,1,4,6])

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
//mergeSort([2,5,3,1,4,6])

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
//quickSort([2,5,3,1,4,6])


function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    if (val === arr[i]) return i;
    if (val < arr[i]) end = i - 1;
    else start = i + 1;
  }
  return -1;
}
let a = [1, 2, 3, 4, 6, 10];
//binarySearch(a, 10);