//Sorting arrays
//Js built in works as espected with strins
let arr = ["ad", 'cd', 'bc', 'zc', 'wr'];

let sortedArr = arr.sort();

console.log(sortedArr);

// with numbers works differently

let nums = [23, 45, 2, 1, 56, 87, 22, 18, 11]


compareNum = (num2, num1) => {
    return num1 - num2
}

let sortedNums =  nums.sort(compareNum);
console.log(sortedNums);