const car = {
    marca: "Toyota",
    modelo: "supra mk4",
    annio: 1999
}

console.log(car.marca);

const arr = [10, 20, 30, 40, 50];

// map devuelve una copi del array que le fue dado modificado segun la funcion callback que se le pase
const arr_map = arr.map(num => num / 10);
// tal y como se indica filtra solo los elementos con la funcion dada(callback)
const arr_filtrer = arr.filter(num => num > 25);
// reduce ejecuta un callback por cada elemento del array y solo devuelve un valor
const arr_reduce = arr.reduce((acc, currentValue) => acc + currentValue);

console.log(arr_map);
console.log(arr_filtrer);
console.log(arr_reduce);