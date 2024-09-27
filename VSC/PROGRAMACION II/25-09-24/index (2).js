const posts =[
    {
    name:"jose",
    nickname: '@josea',
    timestamp:'10 minutos sept',
    likes:33,
    retweets:5,
    comments:3,
    userImage:'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg',
    content:'no me gusta la primavera'
},
{
    name:"maria",
    nickname: '@mariaa',
    timestamp:'10 minutos sept',
    likes:33,
    retweets:5,
    comments:3,
    userImage:'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg',
    content:'los pumas ganaron ayer'
},
{
    name:"ana",
    nickname: '@anaaaa',
    timestamp:'10 minutos sept',
    likes:33,
    retweets:5,
    comments:3,
    userImage:'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg',
    content:'viva boca'
}
]
const postContainerHTML = document.querySelector('.posts')
const renderizarPosts = (posts) => {
    postContainerHTML.innerHTML =''
    posts.forEach(post => {
        postContainerHTML.innerHTML+=`
        <div>
            <img src="${post.userImage}" width="50px">
            <div>
                <span>${post.name}</span>
                <span>${post.nickname}</span>
            </div>
            <span>${post.timestamp}</span>
            <p>${post.content}</p>
            <div>
                <span>${post.likes} likes </span>
                <span>${post.retweets} retweets</span>
                <span>${post.comments} comments</span>
            </div>
            <hr>
        </div>
        `
    })
}
renderizarPosts(posts);
const saludar = () =>{console.log ('hola')
}
/* Obtenemos el elemento click con id BTN y lo guardamos en una constante */
const btnClick = document.getElementById('btn')

btnClick.addEventListener('focus', ( ) =>{                  
    console.log('Se presiono el boton')
})

btnClick.addEventListener('click', ()=>{
    console.log('Se presio el boton y se levanto el dedo')
})
                                                /* Buscar el timer */
btnClick.addEventListener('dblclick', ()=>{
    console.log('Se hizo doble click')
})

const search = document.getElementById('search')      // Agarro la id del input que es search y la guardo
search.addEventListener('input', ()=>{                // Renderiza el posts con lo que escribí en el input
    let valorDelInput = search.value.toLowerCase()
    console.log(valorDelInput)
    renderizarPosts(posts.filter(post => post.content.toLowerCase().includes(valorDelInput)))
})

const contador = document.getElementById("contador");   //ID del numero
const suma = document.getElementById("suma");           // ID del +
const resta = document.getElementById("resta");         // ID del -
let numero = 0;                                         // variable Contador
suma.addEventListener("click", ()=> {
    numero = numero + 1
    contador.innerHTML = numero;
})
resta.addEventListener("click", ()=> {
    numero = numero - 1
    contador.innerHTML = numero;
})

const btnMenu = document.getElementById("btn-menu");
const navbarHTML = document.getElementById("navbar");
btnMenu.addEventListener('click', ()=>{
    navbarHTML.classList.toggle('oculto')
})