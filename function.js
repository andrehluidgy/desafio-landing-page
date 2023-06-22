var foto1 = window.document.getElementById("foto1")
var foto2 = window.document.getElementById("foto2")
var foto3 = window.document.getElementById("foto3")

function TrocarFoto1() {
    foto1.style = "display:none"
    foto2.style = "display:flex" 
    foto3.style = "display:none"
}

function TrocarFoto2() {
    foto1.style = "display:none"
    foto2.style = "display:none" 
    foto3.style = "display:flex"
}

function TrocarFoto3() {
    foto1.style = "display:flex"
    foto2.style = "display:none" 
    foto3.style = "display:none"
}
