
function naiveBubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            console.log(arr)
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
            console.log(arr, arr[j], arr[j+1]);
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
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false;
            }
        }
        if( noSwaps) break;
    }
    return arr;
}

console.log(bubbleSortES6([89,1,2,3,48,5,6,7,10,45,56,67,87]))