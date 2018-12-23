/**
 * Write a function called same, which accepts two arrays.
 * the function should return true if every value in the array has it's corresponding value
 * squared in the second array. the frequency of values should be the same.
 */
//O(n) notation
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let counter1 = {}
    let counter2 = {}
    for (const val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1
    }

    for (const key in counter1) {
        if (!(key ** 2 in counter2)) {
            return false;            
        }
        if(counter2[key**2]!== counter1[key]){
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));