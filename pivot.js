/*
Write a method that returns the "pivot" index of a list of integers. We define the pivot index as the index where the sum of the numbers on the left is equal to the sum of the numbers on the right. Given [1, 4, 6, 3, 2], the method should return 2, since the sum of the numbers to the left of index 2 is equal to the sum of numbers to the right of index 2 (1 + 4 = 3 + 2). If no such index exists, it should return -1. If there are multiple pivots, you can return the left-most pivot.


*/


//Create a function that receives an array and finds the pivot number
//given [-7, 1,5,2,-4,3] should return 3
//given [1, 4, 6, 3, 2] should return 2
//given [2,4,5,6,7,8,9,34] should return -1
function pivotArr(arr){
    let add = array => array.reduce((a,b) => a + b, 0);
    let sum =  add(arr);

    var left = 0;
    var right = 0;

    for(let i = 0; i < arr.length; i++){
        right = sum - (left + arr[i]);
        if(left == right){
            return i;
        }
        left += arr[i];
    }
    return -1

}
let array1 = [-7, 1,5,2,-4,3];
let array2 = [1, 4, 6, 3, 2];
let array3 = [2,4,5,6,7,8,9,34];

console.log(pivotArr(array1));
console.log(pivotArr(array2));
console.log(pivotArr(array3));