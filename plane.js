
function _plane () {
  
  let eq = document.getElementById("eq")
  eq.innerHTML = "<br>Ecuación del plano: "
  
  a_input = createInput()
    .size(20, 10)
    .parent("eq")
    .id("_a")
  eq.innerHTML += " x + "
  b_input = createInput()
    .size(20, 10)
    .parent("eq")
    .id("_b")
  eq.innerHTML += " y + "
  c_input = createInput()
    .size(20, 10)
    .parent("eq")
    .id("_c")
  eq.innerHTML += " z + "
  d_input = createInput()
    .size(20, 10)
    .parent("eq")
    .id("_d")
  
  eq.innerHTML += " = 0<br><br>"
  eq.align = "center"
  
  document.getElementById("_a").value = "1"
  document.getElementById("_b").value = "2"
  document.getElementById("_c").value = "4"
  document.getElementById("_d").value = "-3"
}