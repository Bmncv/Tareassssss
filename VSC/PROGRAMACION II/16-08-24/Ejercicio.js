// EJERCICIO
//1. Dado 1 array de números, escribir 1 función que calcule la suma de todos los números del array
const sumatoria = (ArrayDeNumeros) =>{
    let total = 0
    ArrayDeNumeros.forEach((numero) => {
        total = total + numero
    })
    return total
}
console.log(sumatoria([8, 8, 8]))





const sumatoria1 = (arraydenum)=>{
    let total1=0;
    for (let numerox of arraydenum){
        total1 = total1 + numerox
    }
    return total1
}
console.log('-------------------------')
console.log(sumatoria1([1,2,3]))



const sumapares = (arraynum)