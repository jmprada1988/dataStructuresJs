//Write a function that takes an object and  returns the strings contaied in an object
collectString = (obj) => {
    let strArray = [];

    for(var key in obj){
        if(typeof obj[key]=== 'string'){
            strArray.push(obj[key]);
        } else if (typeof obj[key]=== 'object'){
            strArray = strArray.concat(collectString(obj[key]));
        }
    }
    return strArray;
}

let test = {"abc":"abcef", "c": {1:"hdsfhjsd", 2: 45, 3: "hello there", 56: {1:"final test"}}}
console.log(collectString(test));