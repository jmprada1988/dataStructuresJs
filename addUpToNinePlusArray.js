/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

console.log('Hello, world!');

/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/
///write a function takes n

//should sum all digits up until n

// if n >= 10 

function sum(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {        
        if(i >= 10){
           
            //total += ((n + 1) + total);
            let temp = sumOver10(i)
            total += temp;
        }else{
            total += i;  
        }

    }
        return total;
}

function sumOver10(n){
    let num = n;
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
   // console.log(realDigits)
    return realDigits.reduce(reducer);    
}

///////////////////////////
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

////////////////////////

//console.log(sumOver10(4568));



//console.log(' 4 ', sum(4));
console.log(' 13 ', sum(13));