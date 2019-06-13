
function _TL() {

	let TL = document.getElementById("TL")

	let a = parseFloat(document.getElementById("_a").value)
	let b = parseFloat(document.getElementById("_b").value)
	let c = parseFloat(document.getElementById("_c").value)
	let d = parseFloat(document.getElementById("_d").value)

	let _a = a.toFixed(2)
	let _b = b.toFixed(2)
	let _c = c.toFixed(2)
	let _d = d.toFixed(2)

	let _t = "( - ("+
		_a+") * x - ("+
		_b+") * y - ("+
		_c+") * z - ("+
		_d+")) / " + (a**2+b**2+c**2).toFixed(2)

	TL.align = "center"
	TL.innerHTML = "<br>t = " + _t + "<br><br>"
	TL.innerHTML += `
		T(x,y,z) = < x + t (${_a}),
		y + t (${_b}), z + t (${_c}) >
	`
	TL.innerHTML += "<br><br>"
}
