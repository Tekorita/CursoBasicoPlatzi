var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keydown", dibujarTeclado);
document.getElementById("area_de_dibujo").addEventListener("mousedown", presionandoClick);
document.getElementById("area_de_dibujo").addEventListener("mouseup", soltandoClick);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var x = 100;
var y = 100;

//dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorsito = "green";
    var velocidad = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorsito, x, y, x, y - velocidad, papel);
            y = y - velocidad;
        break;
        case teclas.DOWN:
            dibujarLinea(colorsito, x, y, x, y + velocidad, papel);
            y = y + velocidad;
        break;
        case teclas.LEFT:
            dibujarLinea(colorsito, x, y, x - velocidad, y, papel);
            x = x - velocidad;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorsito, x, y, x + velocidad, y, papel);
            x = x + velocidad;
        break;
    }
}

function dibujarMouse(evento)
{
    var colorsito = "blue";
    var grosor = 1;
    dibujarLinea(colorsito, evento.layerX-grosor, evento.layerY-grosor, evento.layerX+grosor, evento.layerY+grosor, papel);
}

function presionandoClick() {
    document.getElementById("area_de_dibujo").addEventListener("mousemove", dibujarMouse);
};

function soltandoClick() {
    document.getElementById("area_de_dibujo").removeEventListener("mousemove", dibujarMouse);
};