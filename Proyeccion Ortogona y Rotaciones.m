
# Variables para la ecuación del plano
# ax + by + cz + d=0
a = 0
b = 1
c = 1
d = -2

# c no puede ser 0 y almenos a, b, o c tienen que ser difernte a 0
if (c == 0 || (a == 0 && b == 0 && c == 0))
  printf("ERROR")
  return
endif


# Puntos en el espacio para probar la TL de un punto sobre el plano
x1 = 5
y1 = 5
z1 = 5


# Ángulo de rotación para el eje Z
o = 30
o = o*pi/180

# Rotando el punto en el plano XY (eje Z)
x1p = x1*cos(o)-y1*sin(o)
y1p = x1*sin(o)+y1*cos(o)
x1 = x1p
y1 = y1p

XX = linspace(-10,10,10)
YY = linspace(-10,10,10)
[ coord_x, coord_y ] = meshgrid(XX, YY)
coord_z = (-a*coord_x -b*coord_y -d ) / c

# Rotando el plano en el eje Z
xp = coord_x*cos(o)-coord_y*sin(o)
yp = coord_x*sin(o)+coord_y*cos(o)
coord_x = xp
coord_y = yp


function [_x, _y, _z] = TL(x,y,z,a,b,c,d)
  _t = (-a*x -b*y -c*z -d) / (a.^2 + b.^2 + c.^2)
  _x = x + _t*a
  _y = y + _t*b
  _z = z + _t*c
endfunction

t = meshgrid(linspace(0,1,4))

# Proyección en el plano
[x2,y2,z2] = TL(x1,y1,z1,a,b,c,d)

vx1 = (1-t)*x1 + t*x2
vy1= (1-t)*y1 + t*y2
vz1 = (1-t)*z1 + t*z2


# Punto Simétrico
x3 = 2*x2-x1
y3 = 2*y2-y1
z3 = 2*z2-z1

vx2 = (1-t)*x2 + t*x3
vy2 = (1-t)*y2 + t*y3
vz2 = (1-t)*z2 + t*z3

hold on
mesh(coord_x,coord_y,coord_z)
mesh(vx1,vy1,vz1)
mesh(vx2,vy2,vz2)