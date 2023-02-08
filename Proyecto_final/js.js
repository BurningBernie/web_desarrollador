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
    document.getElementById("edad").innerHTML = cv.results[0].dob.age

    

}
/*document.getElementById("cuerpo").innerHTML = */

api()



