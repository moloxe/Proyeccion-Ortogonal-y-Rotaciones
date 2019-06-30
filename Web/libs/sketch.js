let cnv, a_input, b_input, c_input, d_input, X, Y, Z, O

function setup() {

	cnv = createCanvas(400, 300)
		.parent("cnv")
		.hide()
	document.getElementById("cnv").align = "center"
	
	_plane()
	_point()
	_rot()

	createButton("Calcular Proyección")
		.parent("_point")
		.mousePressed(proy)
	// document.getElementById("_o").value = 180
	proy()
	// setInterval(function(){
	// 	proy()
	// 	let t = parseFloat(document.getElementById("_o").value) + 10
	// 	document.getElementById("_o").value = t
	// }, 500);
}
