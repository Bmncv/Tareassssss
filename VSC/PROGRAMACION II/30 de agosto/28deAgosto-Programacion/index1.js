/*DOM DOCUMENT OBJECT MODEL*/

/*console.dir(document)

document.querySelector('.titulo')  

const tituloHtml = document.querySelector('.titulo')

let nombre = prompt('Ingresa tu nombre')
tituloHtml.innerText ='hola'+ nombre */

/*-------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  const containerHTML = document.querySelector('#container');
  console.log(containerHTML);

  /*
const usuario ={
    nombre: 'luis',
    apellido:'paz',
    edad:22

}



containerHTML.innerHTML= '
<div>
  <H2>${usuario.nombre}</H2>
   <span><b>Edad:</b>$
 {usuario.edad}
 </span><hr>
</div>'

containerHTML.innerHTML=containerHTML.innerHTML+ '
<div>
  <H2>${usuario.nombre}</H2>
   <span><b>Edad:</b>$
 {usuario.edad}
 </span><hr>
</div>'

/*-------------------------------------------*/
/*


const usuarios  = [{
    nombre: 'luis',
    apellido:'Paz',
    edad: 22
},{
    nombre: 'Lucas',
    apellido:'Perez',
    edad: 23
},{
    nombre: 'Pedro',
    apellido:'Paz',
    edad: 24
},{
    nombre: 'Juan',
    apellido:'Paz',
    edad: 25
}
]

usuarios.forEach((usuario) =>{
 containerHTML.innerHTML=containerHTML.innerHTML+ 
<div>
   <H2>${usuario.nombre}</H2>
    <span><b>Edad:</b>$
   {usuario.edad}
   </span><hr>
 </div>
}
)

*/
const productos = [
  {
    nombre: 'Motorola G8',
    precio: 5000,
    stock_disponible: 22,
    id: 12
  },
  {
    nombre: 'Motorola G8',
    precio: 10000,
    stock_disponible: 22,
    id: 123
  },
  {
    nombre: 'Motorola G8',
    precio: 20000,
    stock_disponible: 22,
    id: 1234
  },
  {
    nombre: 'Motorola G8',
    precio: 30000,
    stock_disponible: 22,
    id: 12345
  }
];

productos.forEach((producto) => {
  console.log(producto); // Debería mostrar cada producto en la consola
  containerHTML.innerHTML += `
    <div class="productCard">
      <h2>${producto.nombre}</h2>
      <span><b>Precio: </b>${producto.precio}</span>
      <span><b>Stock: </b>${producto.stock_disponible}</span>
      <button class="btn">Ver Detalle</button>
    </div>
  `
});


function renderizarProductos(productos){
  productos.forEach((producto)=>{
    containerHTML.innerHTML += `
    <div class="productCard">
      <h2>${producto.nombre}</h2>
      <span><b>Precio: </b>${producto.precio}</span>
      <span><b>Stock: </b>${producto.stock_disponible}</span>
      <button class="btn">Ver Detalle</button>
    </div>
  `
  })
}
renderizarProductos(productos)

function eliminarproducto(id){
  const posicionproducto= productos.findIndex((producto) => producto.id === id)
  productos.slice(posicionProducto,1)
  renderizarProductos(productos)
}




})

