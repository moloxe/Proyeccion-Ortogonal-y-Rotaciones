
function drawEnv(_xp, _yp, _zp) {
    
    let _a = parseFloat(document.getElementById("_a").value)
	let _b = parseFloat(document.getElementById("_b").value)
	let _c = parseFloat(document.getElementById("_c").value)
	let _d = parseFloat(document.getElementById("_d").value)
	let _x = parseFloat(document.getElementById("X").value)
	let _y = parseFloat(document.getElementById("Y").value)
    let _z = parseFloat(document.getElementById("Z").value)
    
    
    let getZ = (x, y) => (-_a*x-_b*y-_d) / _c

    // document.getElementById('mesh').innerHTML = ""

    // Angulo de rotacion para el eje Z
    let _o = parseFloat(document.getElementById("_o").value)
    _o = _o*PI/180
    let x2 = _x*cos(_o)-_y*sin(_o)
    let y2 = _x*sin(_o)+_y*cos(_o)
    _x = x2
    _y = y2
    x2 = _xp*cos(_o)-_yp*sin(_o)
    y2 = _xp*sin(_o)+_yp*cos(_o)
    _xp = x2
    _yp = y2

    let dist = Math.sqrt((_xp-_x)**2+(_yp-_y)**2)
    
    let mn = Math.min(_x,_y,_xp,_yp)
    let mx = Math.max(_x,_y,_xp,_yp)
    mn -= 2*dist
    mx += 2*dist

    a=[]; b=[]; c=[];
	for(let i = mn; i < mx; i+=dist/4) {
        for(let j = mn; j < mx; j+=dist/4) {
            x2 = i*cos(_o)-j*sin(_o)
            y2 = i*sin(_o)+j*cos(_o)
            a.push(x2)
            b.push(y2)
            c.push(getZ(i, j))
        }
	}
	var data=[
        {
            x: [_x,_xp],
            y: [_y,_yp],
            z: [_z,_zp],
            mode: 'markers',
            marker: {
                size: 5,
                line: {
                color: 'rgba(217, 217, 217)',
                width: 0.5},
                opacity: 1},
            type: 'scatter3d'
        },
		{
            opacity:0.8,
            color:'rgb(100,200,300)',
            type: 'mesh3d',
            x: a,
            y: b,
            z: c,
        }
	];
	Plotly.newPlot('mesh', data, {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
      }});
}
