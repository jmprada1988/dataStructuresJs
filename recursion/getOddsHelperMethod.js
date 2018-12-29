//Helper method recursion pattern
/**
* write a function that collects all odd values
 */

 collectOdds = (arr) => {
     let result = [];
     helper = (helperInput)=> {
         if(helperInput.length === 0 ){
             return;
         }
         if(helperInput[0] % 2 !== 0){
             result.push(helperInput[0])
         }
         helper(helperInput.slice(1))
     }
     helper(arr)
     return result;
 }
 console.log(collectOdds([1,2,3,4,5,6,7,8,9,11,23,45,64,78]));