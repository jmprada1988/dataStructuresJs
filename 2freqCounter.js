/**
 * Write a function called same, which accepts two arrays.
 * the function should return true if every value in the array has it's corresponding value
 * squared in the second array. the frequency of values should be the same.
 */

same([1,2,3], [4,1,9]) //true
same([1,2,3],[1,9]) //false
same([1,2,1], [4,4,1])// false, must have same frequency

//O(n^2)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i of arr1) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if(index === -1){
            arr2.splice(index, 1)
        }
    }
    return true;
}

console.log(same([1,2,1], [4,4,1]));