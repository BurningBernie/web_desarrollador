let A = 1
let B = 3

console.log("La suma de A más B es igual a "+(A+B))

document.getElementById('boton1').onclick = function () {
    console.log("capturamos el evento click en boton 1")
    document.getElementById('demo').innerHTML = "evento click capturado"
    document.getElementById('demo').style.backgroundColor = "black"
    document.getElementById('demo').style.color = "white"
}

document.getElementById('boton2').onclick = function () {
    console.log("capturamos el evento click en boton 2")
    document.getElementById('demo').innerHTML = "hagan click en el boton de abajo"
    document.getElementById('demo').style.backgroundColor = "orangered"
    document.getElementById('demo').style.color = "rebeccapurple"
}

document.getElementById('boton3').onclick = function () {
    console.log("capturamos el evento click en boton 3")
    document.body.style.backgroundColor = "black"
}

document.getElementById('boton4').onclick = function () {
    console.log("capturamos el evento click en boton 4")
    document.body.style.backgroundColor = "white"
}

document.getElementById('boton5').onclick = function () {
    console.log("capturamos el evento click en boton 5")
    for( let i=0; i<document.getElementsByClassName("párrafo").length; i++ ){
    document.getElementsByClassName("párrafo")[i].style.display = "none"
    }
}

document.getElementById('boton6').onclick = function () {
    console.log("capturamos el evento click en boton 6")
    for( let i=0; i<document.getElementsByClassName("párrafo").length; i++ ){
    document.getElementsByClassName("párrafo")[i].style.display="flex"
    }
}


for( let i=0; i<document.getElementsByClassName("párrafo").length; i++ ){
    document.getElementsByClassName("párrafo")[i].style.backgroundColor = "white"
    document.getElementsByClassName("párrafo")[i].style.color = "black"
    document.getElementsByClassName("párrafo")[i].style.textAlign = "left"
    }

/*en developer mozilla están todos los eventos
que se pueden usar, buscar y usar*/

/* htmlcolorcodes.com acá podes ver la infinidad de colores que hay 
para usar, y te dice en hexadecimal el que quieras usar por
ejemplo #FF2D00 o en RGB 255, 45, 0 o sino en HSL 11, 100%, 50% */