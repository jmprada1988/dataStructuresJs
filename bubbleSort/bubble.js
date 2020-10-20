
function naiveBubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


function optimizedBubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(j=0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}


bubbleSortES6 = (arr) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2] ] = [arr[idx2], arr[idx1]];
    }
    //variable to optimaze iterations unneeded
    let noSwaps = true;
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false;
            }
        }
        if( noSwaps) break;
    }
    return arr;
}

module.exports = {
    naiveBubbleSort,
    optimizedBubbleSort,
    bubbleSortES6
}