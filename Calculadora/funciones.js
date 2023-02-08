

document.getElementById("suma").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = numeroUno+numeroDos
})

document.getElementById("suma1").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = numeroUno+numeroDos
})

document.getElementById("resta").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = numeroUno-numeroDos
})

document.getElementById("multiplicacion").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = numeroUno*numeroDos
})

document.getElementById("division").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = numeroUno/numeroDos
})

document.getElementById("log").addEventListener("click", function(){
    let numeroUno = parseInt(document.getElementById("numero1").value)
    console.log(numeroUno)
    let numeroDos = parseInt(document.getElementById("numero2").value)
    console.log(numeroDos)
    document.getElementById("div").style.display = "block"
    //document.getElementById("resultado").style.display = "flex"
    document.getElementById("resultado").innerHTML = Math.log(numeroUno)
})

document.getElementById("borrar").addEventListener("click", function(){
    document.getElementById("numero1").value = ""
   
    document.getElementById("numero2").value = ""
    
    document.getElementById("div").style.display = "none"
   
})