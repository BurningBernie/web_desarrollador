var cv

async function api() {
    cv = await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => data);

    console.log(cv)
    console.log(cv.results[0].name.first)

    document.getElementById("imagenCara").src = cv.results[0].picture.thumbnail
    document.getElementById("nombre").innerHTML = cv.results[0].name.first
    document.getElementById("apellido").innerHTML = cv.results[0].name.last
    document.getElementById("edad").innerHTML = cv.results[0].dob.age+" años"
    document.getElementById("per").innerHTML = "Ciudad de Residencia: " + cv.results[0].location.city +
     " ☺ País de residencia: " + cv.results[0].location.country + " ☺ Uso horario para recibir llamadas: "
      + cv.results[0].location.timezone.description


}
/*document.getElementById("cuerpo").innerHTML = */

api()


document.getElementById("breve").addEventListener('mouseover', function () {
    document.getElementById("des").style.display = "inline";
    document.getElementById("per").style.display = "none";
    document.getElementById("lab").style.display = "none";
});

document.getElementById("datos").addEventListener('mouseover', function () {
    document.getElementById("des").style.display = "none";
    document.getElementById("per").style.display = "inline";
    document.getElementById("lab").style.display = "none";
});

document.getElementById("meta").addEventListener('mouseover', function () {
    document.getElementById("des").style.display = "none";
    document.getElementById("per").style.display = "none";
    document.getElementById("lab").style.display = "inline";
});

document.getElementById("expBoton").addEventListener('click', function () {
    document.getElementById("exp").style.display = "inline";
    document.getElementById("edu").style.display = "none";
    document.getElementById("vid").style.display = "none";
});

document.getElementById("eduBoton").addEventListener('click', function () {
    document.getElementById("exp").style.display = "none";
    document.getElementById("edu").style.display = "inline";
    document.getElementById("vid").style.display = "none";
});

document.getElementById("vidBoton").addEventListener('click', function () {
    document.getElementById("exp").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("vid").style.display = "inline";
});


