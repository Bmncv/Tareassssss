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
    </div>
    <div>
        <span>${post.likes} likes </span>
        <span>${post.retweets} retweets</span>
        <span>${post.comments}</span>
    </div>  
   
    <hr>
        `
    })
}
renderizarPosts(posts);
const saludar = () =>{console.log ('LUNES')

}

// btnClick.addEventListener('recibe tipoevento', funcion); 
//btnClick.addEventListener('click', saludar); 


const contador = document.getElementById("contador");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");

let numero = 0;

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