///////////////////////1. understand the problem///////////////////////////
//Write a function that  takes two numbers and return their sum 
//Steps
//1 Can i restate the problem in my own words

/**
 * Implement addition
*/

//2 what are the inputs that go into the problem
/**
 *floats
 *ints
 *strings for large numbers
 * */

//3 outputs that should come out of the solution
//Int float or strings?

//4 Can the output be determned from the inputs, enough info to solve the algorithm
 

//label impoertant pieces of data that are part of the problem


///////////////////////2. explore concrete examples///////////////////////////


// write a function that takes in a string and returns counts of each character in the string


//1. Start with simple examples
console.log(charCount('Hello NGMHT there $###%^$/dsffff111223323')); //{a: 4}
//charCount('hello'); //{h:1, e:1, l:2, o:1}
//2. Progress to more complex examples
"my phone number is 324325354"
"Hello hi "
//3. explore examples with empty inputs
//charCount("");

///////////////////////2. Break it down///////////////////////////
//lowercase and numbers

"your pin is 1234"
/** 
 * 1:1,
 * 2:1,
 * 3:1,
 * 4:1,
 * y:1,
 * o:1,
 * u:1,
 * r:1,
 * p:1,
 * i:2,
 * n:1,
 * s:1
*/
function charCount(str){
    str = str.replace(/\W/g, '').toUpperCase();
    //make an object to return
    const result = {};
    //loop over string, for each char
    for(let char of str){
        //if char is number or letter and is key in object add one to count
        result[char] = ++result[char] || 1;

    }
    return result;
       
       //if char is number/letter and not in object add to abject and set value to 1
       //if console.clear()chr is something else (period, space etc) do nothing.
    //return an object
}
//This function performs better than regexp

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric
       !(code > 64 && code < 91) && //uppercase alpha
       !(code > 96 && code < 123)){//lower alpha
        return false;
    }
    return true;
}
console.log(isAlphaNumeric("-"));
///////////////////////4. solve or simplify///////////////////////////
