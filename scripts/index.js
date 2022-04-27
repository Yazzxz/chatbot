//mensajeMio = document.getElementById
//puede server
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
//console.log(total.innerHTML)
let lugar = document.querySelector('.mensajes')
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

function respuesta(a){
    let x = a.innerText
    x = x.toLowerCase()
    console.log(x)
    x = x.indexOf("hola")
    
    if( x >= 0){
        console.log("si")
        let e = document.createElement('div')
        e.innerText = "hola"
        e.classList.add("mensajeOtro")
        lugar.append(e)
    }}



