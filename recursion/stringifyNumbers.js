/**
    Write a function that receives an object and returns in string the keys as well
    as the values with nexting inclided
 */
strignifyNum = (obj) => {
    var newObj = {};
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else if( obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = strignifyNum(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(strignifyNum({1: 16, 2:54, 3: 454, 4: {13: 45, 67: 654, 65:{34:34}}}));