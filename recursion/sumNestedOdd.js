/**Write a function that receives an object and sums all the odds values contained even if it is nested
 */
sumNestedOdd = (obj, sum=0) => {
    for(var key in obj){
        if(typeof obj[key] === 'object'){
            sum += sumNestedOdd(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 !== 0){
            sum += obj[key];
        }
    }
    return sum;
}
let myObj = {
    1:{1: 1, 2: 2, 3:3,
    4: {'a': 345, 'b': 347, 'c': 579}
    },
    23 : 243,
    5: 5,
    21 : 5,
    'a' : 457
}
console.log(sumNestedOdd(myObj));