
// ---------- EJERCICIO 2 ------------
const sumadpares = (arraynum) =>{
    let suma = 0;
    arraynum.forEach((num) =>{
        if (num % 2 === 0){
            suma =suma + num;
        }
    });
    return suma;
}
console.log(sumadpares([42,3,2,5,6])); // Esto da 50 :)
