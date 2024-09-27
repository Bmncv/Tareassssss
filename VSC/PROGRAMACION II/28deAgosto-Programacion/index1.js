/*DOM DOCUMENT OBJECT MODEL*/

/*console.dir(document)

document.querySelector('.titulo')  

const tituloHtml = document.querySelector('.titulo')

let nombre = prompt('Ingresa tu nombre')
tituloHtml.innerText ='hola'+ nombre */

/*-------------------------------------------*/
const containerHTML = document.querySelector('#container')

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
  containerHTML.innerHTML=containerHTML.innerHTML+ '
<div>
   <H2>${usuario.nombre}</H2>
    <span><b>Edad:</b>$
   {usuario.edad}
   </span><hr>
 </div>'

}
)