
function drawEnv(proy_x, proy_y, proy_z) {
    
    let _a = parseFloat(document.getElementById("_a").value)
	let _b = parseFloat(document.getElementById("_b").value)
	let _c = parseFloat(document.getElementById("_c").value)
	let _d = parseFloat(document.getElementById("_d").value)
	let punt_x = parseFloat(document.getElementById("X").value)
	let punt_y = parseFloat(document.getElementById("Y").value)
    let punt_z = parseFloat(document.getElementById("Z").value)
    let _to = parseFloat(document.getElementById("_o").value)

    const _o = _to*PI/180
    let getZ = (x, y) => (-_a*x-_b*y-_d) / _c
    
    let x2 = 0
    let y2 = 0

    let dist = Math.sqrt((proy_x-punt_x)**2+(proy_y-punt_y)**2) * 2
    let xmed = (proy_x + punt_x) / 2
    let ymed = (proy_y + punt_y) / 2
    let xmin = xmed-dist
    let ymin = ymed-dist

    let xmax = xmed+dist
    let ymax = ymed+dist

    x2 = punt_x*cos(_o)-punt_y*sin(_o)
    y2 = punt_x*sin(_o)+punt_y*cos(_o)

    punt_x = x2
    punt_y = y2
    
    x2 = proy_x*cos(_o)-proy_y*sin(_o)
    y2 = proy_x*sin(_o)+proy_y*cos(_o)
    
    proy_x = x2
    proy_y = y2
    
    a=[]; b=[]; c=[];
	for(let i = xmin; i < xmax; i += dist/4) {
        for(let j = ymin; j < ymax; j += dist/4) {
            a.push(i*cos(_o)-j*sin(_o))
            b.push(i*sin(_o)+j*cos(_o))
            c.push(getZ(i, j))
        }
	}
	var data=[
        {
            x: [punt_x,proy_x],
            y: [punt_y,proy_y],
            z: [punt_z,proy_z],
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
            l: 10,
            r: 10,
            b: 0,
            t: 0
      }});
}
