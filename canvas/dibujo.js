var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorsito = "#FAA"
    var espacios = ancho / lineas;
    do
    {
        yi = espacios * l;
        xf = espacios * (l + 1);
        dibujarLinea(colorsito, ancho, yi, xf, 0);
        l++;
    }while(l < lineas)

    for(l= 0; l < lineas; l++)
    {
        yi = espacios * l;
        xf = espacios * (l + 1);
        dibujarLinea(colorsito, 0, yi, xf, ancho);
        console.log("linea" + l);
    }

    dibujarLinea(colorsito,1,1,1,300);
    dibujarLinea(colorsito,1,299,299,299);
}