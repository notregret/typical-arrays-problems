
exports.min = function min (array) {
    let min = 1000000;
    if ((array === undefined) || (array.length === 0)){
        return 0
    }else{
    for(let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }}

  return min;
}

exports.max = function max (array) {
    let max = 0;
    if ((array === undefined) || (array.length === 0)){
        return 0
    }else{
        for(let i = 0; i < array.length; i++){
            if (array[i] > max){
                max = array[i]
            }
        }}

    return max;
}


exports.avg = function avg (array) {
    let average = 0;
    if ((array === undefined) || (array.length === 0)){
        return 0
    }else{
        for(let i = 0; i < array.length; i++){
            average += array[i];
        }
    }

    return average / array.length;
}


