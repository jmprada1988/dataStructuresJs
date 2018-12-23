//Write a function that takes a sorted and a number, it should return the index where
//the number is or -1 if is not in the array.

//linear search O(n)
// function search(arr, val){
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i]=== val){
//             return i;
//         }
//     }
//     return -1;
// }
//Binary search log(N)
function search(arr, val){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max ){
        let middle = Math.floor((min+max) / 2);
        let currentEl = arr[middle];
        if(arr[middle] < val){
            min = middle + 1;
        } else if (arr[middle] > val){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let r = search([1,2,3,4,5,6,7,8,9,7,45,340,2300], 7);
console.log("value is at index: ", r);

//