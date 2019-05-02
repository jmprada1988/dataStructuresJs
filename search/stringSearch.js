let myStr = "hello jaja eres too good to be true"

stringSearch = (str, subStr) => {
 var counter = 0;
 for(var i = 0; i < str.length; i++){
     for(var j = 0; j < subStr.length; j++){
         if(subStr[j]!== str[i+j] ) break;
         if(j === subStr.length -1) counter++;   
     }
 }
 return counter;
}

console.log(stringSearch(myStr, 'hel'));