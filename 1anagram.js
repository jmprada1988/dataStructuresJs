/**
 * Write a function that takes two string and determine if the second one is an anagram
 * of the first one, an anagram is a word phrase or name formed by rearrangeing the letters
 * such as cinema => iceman
 */

 function anagram(str1, str2){
     if(str1.length !== str2.length){
         return false;
     }
     let objStr = {}
     for(let i = 0; i < str1.length; i++){
         let char = str1[i];
         objStr[char] ? objStr[char] += 1 : objStr[char] = 1;
     }
     console.log(objStr);

     for(let i = 0; i < str2.length; i++){
        let char = str2[i];
        if(!objStr[char]){
            return false;
        } else {
            objStr[char] -= 1;
        }
     }
     return true;

 }

console.log( anagram('anagram', 'nagaram'));