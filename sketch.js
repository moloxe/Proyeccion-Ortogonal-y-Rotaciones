let cnv, a_input, b_input, c_input, d_input, X, Y, Z

function setup() {

	cnv = createCanvas(400, 300)
		.parent("cnv")
		.hide()
	document.getElementById("cnv").align = "center"

	_plane()
	_point()
	createButton("Calcular Proyección")
		.parent("_point")
		.mousePressed(proy)
}
/*
function draw() {
	background(220);
}
*/
