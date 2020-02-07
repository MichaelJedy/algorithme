function bubbleSort(inputArray){
    let len = inputArray.length;

    for( let i = 0; i < len ; i++){
        for( let j=0; j < (len - i - 1 ) ; j++ ){
            if( inputArray[j] > inputArray[j+1] ){
                let temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp;
            }
        }
    }
    return inputArray ;
}

let array = [500,100,55,33,3,2] ;
let array2 = bubbleSort( array ) ;
console.log( array2 ) ;