

const containerHTML =document.querySelector('#container')

const productos = [{
    nombre:'Motorola G30',
    precio:'450.000',
    stock_disponible: 12,
    id:1,
    img: 'https://motorolaes.vtexassets.com/arquivos/ids/157683/Moto-G30-pdp-kv-render-Pastel-sky-8-wbzi4fcs.png?v=637490788669470000'
},{
    nombre:'Samsung S23',
    precio:'890.000',
    stock_disponible: 17,
    id:2,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/es/2302/gallery/es-galaxy-s23-s918-sm-s918bzkheub-534729651?$624_624_PNG$'
},{
    nombre:'Samsung A15',
    precio:'40.000',
    stock_disponible: 15,
    id:3,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a155mzkaaro/gallery/ar-galaxy-a15-sm-a155-sm-a155mzkaaro-thumb-541506120'
},{
    nombre:'Samsung A55',
    precio:'950.000',
    stock_disponible: 5,
    id:4,
    img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a556elvqaro/gallery/ar-galaxy-a55-5g-sm-a556-sm-a556elvqaro-542703563?$650_519_PNG$'
}]
    const renderizarProductos = (productos) => {
        containerHTML.innerHTML = '';

        productos.forEach(producto => {
            const productCardHTML = `
                <div class="productCard" data-id="${producto.id}">
                    <div class="close-btn">X</div> 
                    <h2>${producto.nombre}</h2>
                    <div class="contenido">
                        <div class="info">
                            <span><b>Precio:</b> ${producto.precio}</span>
                            <span><b>Stock:</b> ${producto.stock_disponible}</span>
                        </div>
                        <div class="imagen">
                            <img src="${producto.img}" alt="${producto.nombre}" width="150" height="150">
                        </div>
                    </div>
                    <div class="boton">
                        <button class="btn">ver detalle</button>
                    </div>
                </div>
            `;
            containerHTML.innerHTML += productCardHTML;
        });

        document.querySelectorAll('.close-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productCard = event.target.closest('.productCard');
                const productId = parseInt(productCard.dataset.id, 10);
                eliminarProducto(productId);
            });
        });
    };
                    //el id me ayuda a eliminar el producto del array
    const eliminarProducto = (id) => {
        const posicionProducto = productos.findIndex((producto) => producto.id === id);
        if (posicionProducto !== -1) {
            const productCard = document.querySelector(`.productCard[data-id="${id}"]`); //seleciono el id del data-id del productcard
            productCard.classList.add('blur-out-expand'); // le agregué la animacion a la clase
            productCard.addEventListener('animationend', () => {
                productos.splice(posicionProducto, 1);
                renderizarProductos(productos);
            });
        }
    };
renderizarProductos(productos)


// a ver, 17:46

//17:49