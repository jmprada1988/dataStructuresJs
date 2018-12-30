//Write a function that takes an object and  returns the strings contaied in an object
collectStr = (obj) => {
    var strArr = [];
    gatherStrings = (o) => {
        for(var key in o){
            if(typeof o[key] === 'string'){
                strArr.push(o[key]);
            } else if(typeof o[key] === 'object'){
                return gatherStrings(o[key]);
            }
        }
    }
    gatherStrings(obj);
    return strArr;
}
let test = {"abc":"abcef", "c": {1:"hdsfhjsd", 2: 45, 3: "hello there", 56: {1:"final test"}}}
console.log(collectStr(test));