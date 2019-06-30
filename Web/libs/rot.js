
function _rot() {

    let r = document.getElementById("_rot")
    r.align = "center"
    r.innerHTML = "Ángulo de rotación en el plano XY: θ = "

    O = createInput()
    .parent("_rot")
    .size(20, 10)
    .id("_o")
    
    r.innerHTML += "<br>"
    document.getElementById("_o").value = "30"
}