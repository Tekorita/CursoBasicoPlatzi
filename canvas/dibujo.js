var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorsito = "#FAA"

do
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorsito, 300, yi, xf, 0);
    //console.log("linea" + l);
    l++;
}while(l < lineas)

/*
while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorsito, 0, yi, xf, 300);
    //console.log("linea" + l);
    l++;
}
*/

for(l= 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorsito, 0, yi, xf, 300);
    console.log("linea" + l);
}

dibujarLinea(colorsito,1,1,1,300);
dibujarLinea(colorsito,1,299,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

