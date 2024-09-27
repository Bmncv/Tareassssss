var nombre = "Juan";  // Alcance global o de función
let edad = 25;        // Alcance de bloque
const PI = 3.1416;    // Constante, no se puede cambiar

//-----------------------------------------------------------------------

if (edad > 18) {
    console.log("Eres mayor de edad");
} else if (edad === 18) {
    console.log("Tienes 18 años");
} else {
    console.log("Eres menor de edad");
}

//-----------------------------------------------------------------------

for (let i = 0; 5 > i ; i++) {
    console.log(i);  // Imprime los números del 0 al 4
}

//-----------------------------------------------------------------------

console.log("Asi se escribe texto y " + nombre + "  tiene " + edad + " años")
console.log(`Tambien podemos decir asi que ${nombre} tiene ${edad} años`)

//-----------------------------------------------------------------------
let contador = 0;
do {
    console.log(contador);  // Imprime los números del 0 al 4
    contador++;
} while (contador < 5);



 //-------------------ARRAYSSSS---------------------------------------
const numeros = [1, 2, 3, 4, 5];
// Acceso a un elemento
console.log(numeros[0]); // Imprime 1

// Métodos comunes
numeros.push(6);  // Añade un elemento al final
numeros.pop();    // Elimina el último elemento
numeros.shift();  // Elimina el primer elemento
numeros.unshift(0); // Añade un elemento al inicio



//---------------------------OBJETOSSSSS--------------------------------
const persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
        return `Hola, me llamo ${this.nombre}`;
    }
};

console.log(persona.nombre); // Imprime "Juan"
console.log(persona.saludar()); // Imprime "Hola, me llamo Juan"
//-----------------------------------------------------------------------




//-----------------------------------------------------------------------
console.log("-----------------------------------------------------")
// map() Permite recorrer el array y modificar los elementos presentes en él retornando un nuevo array con la misma longitud que el original. 
const array1 = [1,2,3,4,5,6,7,8,9];
const resultArray1 = array1.map(Element => Element + 10)
console.log(resultArray1)

//filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
const array2 = [1,2,3,4,3,6,7,8,7];
const resultArray2 = array2.filter(Element => Element == 3 || Element == 7)
console.log(resultArray2)

//forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
const array3 = ['banana', 'apple', 'orange', 'pear']
const resultArray3 = array3.forEach((element, i) =>{
    console.log(`${element} se encuentra en el indice ${i}`)
})

//find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
const array4 = [1,2,3,4,5,6,7,8,9];
const resultArray4 = array4.find(element => element >= 5 )
console.log(resultArray4) // [5]

//sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
const array5 = [1,2,3,4,5,6,7]
const alfabeto = ['g', 'd', 'c', 'o', 'z', 'a', 'b']
// Ordenar en forma descendente
const desc = array5.sort((a,b) => a > b ?-1 : 1)
console.log(desc) 
// Ordenar en forma ascendente
const asc = alfabeto.sort((a,b) => a>b ? 1: -1)
console.log(asc) //['a', 'b', 'c', 'd', 'g', 'o', 'z']