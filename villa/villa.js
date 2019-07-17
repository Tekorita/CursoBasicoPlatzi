var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/tile.png?alt=media&token=f1ccc3d5-34c9-4000-9e6f-86ec2c29c367"

var z;
var imagen = new Image();

for(var x = 0; x<10; x++)
{
    z = aleatorio(1, 5);    
    document.write(z + ", ");
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}