// array shuffle
function shuffle_array(jumlah) {
    let arr = [];
    let arr_ganjil = [], arr_genap = []
    
    for(let i=0; i<jumlah; i++){
        arr.push(Math.floor(Math.random() * 50) + 1);
        if (i % 2 !== 0){
            arr_ganjil.push(arr[i])
        }else{
            arr_genap.push(arr[i])
        }
    }
    return [arr, arr_ganjil, arr_genap]

}

//menemukan nilai minimal
function find_min(array){
    min_number = array[0];
    for(let i=0; i<array.length; i++){
        if (min_number > array[i]) {
            min_number = array[i]
        }
    }
    return min_number;
}

//menemukan nilai maximal
function find_max(array){
    max_number = array[0];
    for(let i=0; i<array.length; i++){
        if (max_number < array[i]) {
            max_number = array[i]
        }
    }
    return max_number;
}

//
function total(array){
    number = 0
    for(let i=0; i<array.length; i++){
        number += array[i]
    }
    return number
}

function calculate_mean(array){
    number = 0
    for(let i=0; i<array.length; i++){
        number += array[i]
    }
    return number / array.length
}


let [arr, ganjil, genap] = shuffle_array(100)
console.log("array random 100: [" + arr + "]\n", 
            "array index ganjil: [" + ganjil + "]\n", 
            "array index genap: [" + genap + "]")
console.log("nilai min array index ganjil: " + find_min(ganjil))
console.log("nilai max array index ganjil: " + find_max(ganjil))
console.log("nilai min array index genap: " + find_min(genap))
console.log("nilai max array index genap: " + find_max(genap))
console.log("nilai mean array index ganjil: " + calculate_mean(ganjil))
console.log("nilai mean array index genap: " + calculate_mean(genap))








