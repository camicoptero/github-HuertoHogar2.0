console.log("hola");

const LLAVE = "carrito";

const section = document.getElementById("test_1");
console.log(section);

const contenedorCard = document.createElement("div");
contenedorCard.className="contenedor-card"

productos = [
        {
            "id":1,
            "nombre":" Manzanas Fuji",
            "imagen":"https://jumbocl.vtexassets.com/arquivos/ids/357731-250-250/Manzana-Fuji-granel.jpg?v=638776720527670000",
            "descripcion":" Descripción: Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
                                
            "precio":"1200 x kilo"
        },
        {
            "id":2,
            "nombre":"naranja valencianas",
            "imagen": "https://citrofrut.com/noticias/wp-content/uploads/2023/02/shutterstock_173674910-scaled.jpg", 
            "descripcion":" Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
            "precio":"1000 x kilo"

        },
        {
            "id":3,
            "nombre":"Platanos cavendish",
            "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiQ-9YzkzCC3xsFeVN7GSGdjdSV58dWy28PVbyG_TOQ&s=10",
            "descripcion":"Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.",
            "precio":"800 x kilo"
        },
        {
            "id":11,
            "nombre":"zanahoria organica",
            "imagen" : "https://5aldia.cl/wp-content/uploads/2018/03/zanahoria.jpg",
            "descripcion":" Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable",  
            "precio":"900 x kilo"
        },
        {
            "id":12,
            "nombre":"Espinacas Frescas",
            "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKbb5AWiLSLz1p0MMZr-grksLRsJhFMhlFciqveEWoA&s=10",
            "descripcion":"Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional."
            ,"precio":"700 x bolsa de 500g"
        },
        {
            "id":13,
            "nombre":"Pimenton tricolor",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jvjNfK9WTGnDqayu4gv_hIQfv2uGVP5HI60T0ZHNscOBF867SHQ0PRQ&s=10"
            ,"descripcion":"Descripción: Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta"
            ,"precio": "1500 por kilo"
        },
        {
            "id":101,
            "nombre":"Miel Organica"
            ,"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt7EhyOlAchjTl4XRQz61TzbiG8h_3tHEoWCrHqSy6yCB70kTM7Iv6InA&s=10"
            ,"descripcion":"Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas."
            ,"precio":"5000 x frasco de 500g"
        }





]




for (const i of productos){
    section.appendChild(contenedorCard);

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "card";
    contenedorCard.appendChild(nuevoDiv);

    const titulo_producto = document.createElement("h3")
    titulo_producto.textContent = i.nombre;
    nuevoDiv.appendChild(titulo_producto);
    
    const imgProducto = document.createElement("img");
    imgProducto.src = i.imagen;
    imgProducto.className = "imgProducto";
    nuevoDiv.appendChild(imgProducto);

    const desc_producto = document.createElement("p");
    desc_producto.textContent = i.descripcion;
    nuevoDiv.appendChild(desc_producto);


    const precio_Producto = document.createElement("h3");
    precio_Producto.textContent= i.precio;
    nuevoDiv.appendChild(precio_Producto);

    const btnAgregarAlCarro = document.createElement("button");
    btnAgregarAlCarro.textContent = " agregar al carrito"
    btnAgregarAlCarro.className = "btn btn-primary mt-3";
    btnAgregarAlCarro.addEventListener("click",function(){
        guardarProducto(i);
    })
    nuevoDiv.appendChild(btnAgregarAlCarro)
}

function guardarProducto(productos){
    var StorageActual = localStorage.getItem(LLAVE);
    var lista = []
    if (StorageActual != null){
        var StorageParse = JSON.parse(StorageActual);
        lista.push(productos);
        StorageParse.push(lista);
        localStorage.setItem(LLAVE,JSON.stringify(StorageParse));
    }else{
        lista.push(productos);
        localStorage.setItem(LLAVE,JSON.stringify(lista));
    }
}
