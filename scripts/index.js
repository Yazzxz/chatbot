/* Links utiles
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
function respuestas(mensaje){
    console.log("si")
    let e = document.createElement('div')
    e.innerText = mensaje
    e.classList.add("mensajeOtro")
    lugar.append(e)
}

console.log(document.getElementById("textoPrincipal").innerText)
console.log("si "+ $(".textoPrincipal"))

//Funcion que permite mostrar y esconder el chat
$("#si").hide();
$(document).ready(function(){
    $("#aveces").click(function(){
        $("#si").toggle(250);
    });
});

//Cambiar texto de pagina principal

$(document).ready(function(){
    function cambiarTexto(){
        if(document.getElementById("textoPrincipal").innerText == ("Encontra Lo Que Queres")){
            document.getElementById("textoPrincipal").innerText = ("Encontralo Al Mejor Precio")
        }
        else{
            document.getElementById("textoPrincipal").innerText = ("Encontra Lo Que Queres")
        }
    }
    setInterval(cambiarTexto, 3000);
})


var paginaPrincipalTexto = document.getElementById("textoPrincipal")
visualizador = document.querySelector(".chat")
let lugar = document.querySelector('.mensajes')

//Funcion anexada al boton del escritor del chat que envia el mensaje escrito
function mandarMensaje(){
    if(document.getElementById("mensaje").value != 0){
        mensaje = document.getElementById("mensaje").value
        console.log(mensaje)
        let a = document.createElement('div')
        a.innerText = mensaje
        a.classList.add("mensajePropio")
        lugar.appendChild(a)
        document.getElementById("mensaje").value = ""
        respuesta(a)
    }
}

//Funcion que da una respuesta segun lo que nosotros le digamos. Se ejecuta al final de la funcion mandarMensaje()
function respuesta(a){
    let x = a.innerText
    x = x.toLowerCase()
    console.log(x)
    
    if(x.includes("hola") || x.includes("buenas")){
        x = "saludo"
    }
    if(x.includes("horario") || x.includes("horarios")){
        x = "horario"
    }
    else{
        x = "error"
    }

    if( x == "saludo"){
        respuestas("Hola!! :)")
    }
    if( x == "horario"){
        respuestas("El local esta abierto de 8:00 a 12:00 hs y de 16:00 hasta 20:00 hs")
    }
    
    if(x == "error"){
        respuestas("Disculpa, no eh podido entender tu consulta :(")
    }}
