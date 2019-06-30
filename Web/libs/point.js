
function _point() {
  
  let P = document.getElementById("_point")
  P.align = "center"
  P.innerHTML = "Punto: P ("
  
  X = createInput()
    .parent("_point")
    .size(20, 10)
    .id("X")
  P.innerHTML += ", "
  Y = createInput()
    .parent("_point")
    .size(20, 10)
    .id("Y")
  P.innerHTML += ", "
  Z = createInput()
    .parent("_point")
    .size(20, 10)
    .id("Z")
  P.innerHTML += ")<br><br>"
  
  document.getElementById("X").value = "1"
  document.getElementById("Y").value = "2"
  document.getElementById("Z").value = "1"
}