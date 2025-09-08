function invertedArray<T>(valor: T[]): T[] {
    let arrModify: T[] = [];
    for(let i = valor.length - 1; i >= 0; i--) {
        arrModify.push(valor[i]);
    }
    return arrModify;
}

let arr = [12, 3, 4, 0];
console.log(arr)
let outInvertedArr = invertedArray(arr);
console.log(outInvertedArr)