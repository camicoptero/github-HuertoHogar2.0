const key_storage = "clave_storage";

function guardar(){
    var Nombre_usuario = document.getElementById("Nombre_usuario")
    var correo_electronico = document.getElementById("correo_electronico")



    if (Nombre_usuario == ""){
        alert("EL NOMBRE DE USUARIO NO DEBE ESTAR VACIO")}else if
    (correo_electronico){
        alert("el correo no puede estar vacio")
    }
var USUARIO = [
    {
        "Nombre_usuario":Nombre_usuario,
        "correo_electronico":correo_electronico
    }
]

console.log(USUARIO[0].Nombre_usuario);

console.log(Nombre_usuario)

localStorage.setItem(key_storage,JSON.stringify(Nombre_usuario));

var Storage = localStorage.getItem(key_storage);
console.log(JSON.parse(Storage))



}