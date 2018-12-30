/**
 * write a function that receives an array of strings and return it capitalized
 */

 capitalizeWord = (array) => {
     if(array.length === 1){
         return [array[0].toUpperCase()];
     }
     let res = capitalizeWord(array.slice(0, -1));
     res.push(array.slice(array.length - 1)[0].toUpperCase());
 }

 console.log(capitalizeWord(['hello world']));
