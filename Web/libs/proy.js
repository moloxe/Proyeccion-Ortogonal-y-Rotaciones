let calt = (x,y,z,a,b,c,d) =>
	(-a*x-b*y-c*z-d)/(a**2+b**2+c**2)

function proy() {

	let a = parseFloat(document.getElementById("_a").value)
	let b = parseFloat(document.getElementById("_b").value)
	let c = parseFloat(document.getElementById("_c").value)
	let d = parseFloat(document.getElementById("_d").value)
	let x = parseFloat(document.getElementById("X").value)
	let y = parseFloat(document.getElementById("Y").value)
	let z = parseFloat(document.getElementById("Z").value)

	if (c==0)
		alert("\"z\" se usa en función de \"x\" y \"y\", por lo tanto no puede ser igaul a 0.")

	_TL()

	let t = calt(x,y,z,a,b,c,d)

	let _x = (x + t*a).toFixed(2)
	let _y = (y + t*b).toFixed(2)
	let _z = (z + t*c).toFixed(2)

	let _proy = document.getElementById("proy")
	_proy.innerHTML = `
		T(${x}, ${y}, ${z}) = (${_x}, ${_y}, ${z})
		<br><br>
	`
	drawEnv(_x, _y, _z)
}
