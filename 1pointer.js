/**
 * Write a function called zumZero which accepts a sorted array of integers
 * The function should find the first pair where the sum is zero
 * return an array that includes both values summing zero or undefined if a pair does not exist
 */
//O(n^2) version
//  function sumZero(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j =i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0 ){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//  }

//Time complexity O(n)
//Space complexity O(1)
sumZero = (arr) => {
    let left = 0;
    let right = arr.length-1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return[ arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        }else {
            left++
        }
    }
}


 console.log(sumZero([-4,-30, -2,-1, 0, 7, 11, 5]));