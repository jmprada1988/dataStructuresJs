/** write a function that receives an array of strings and returns an array with  the first latter of every string in the array capitalizes */

capitalizeFirst = (array) => {
    if(array.length === 1){
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }

    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length -1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirst(["asjdj", "hjsdhfjdf", "testing a new string"]));
let test = ["second"];
console.log(test.slice(test.length -1)[0][0].toUpperCase());
console.log(test.slice(test.length-1)[0].substr(1));