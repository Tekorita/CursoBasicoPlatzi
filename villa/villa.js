var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/tile.png?alt=media&token=f1ccc3d5-34c9-4000-9e6f-86ec2c29c367",
    cargaOk: false
};
var vaca = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/vaca.webp?alt=media&token=1f3b14cf-582a-4b50-80a8-ab36752a5b5e",
    cargaOk: false
};
var cerdo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/cerdo.webp?alt=media&token=21bca080-7c4d-488b-9571-05344454bced",
    cargaOk: false
};
var pollo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/pollo.webp?alt=media&token=6c9f6fce-db46-4420-87f5-e6dc7997543d",
    cargaOk: false
};

var x = 200;
var y = 200;

var cantidadVacas = aleatorio(5,20);
var cantidadPollos = aleatorio(10,15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function dibujarTeclado(evento)
{
    var velocidad = 5;
    console.log(dibujar());
    cargarFondo();
    cargarPollos();
    switch(evento.keyCode)
    {
        case teclas.UP:
            papel.drawImage(cerdo.imagen, x, y - velocidad);            
            y = y - velocidad;
        break;
        case teclas.DOWN:
            papel.drawImage(cerdo.imagen, x, y + velocidad);
            y = y + velocidad;
        break;
        case teclas.LEFT:
            papel.drawImage(cerdo.imagen, x - velocidad , y);
            x = x - velocidad;
        break;
        case teclas.RIGHT:
            papel.drawImage(cerdo.imagen, x + velocidad , y);
            x = x + velocidad;
        break;
    }
}

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);   
    }
    if(vaca.cargaOk)
    {
        for (var v = 0; v < cantidadVacas; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(vaca.imagen, x, y);
        }    
    } 
    if(pollo.cargaOk)
    {
        var posiciones = [];
        var pos = {};
        for (var n = 0; n < cantidadPollos; n++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
            pos = {"x":x,"y":y}
            posiciones.push(pos);
        }
    }        
    if(cerdo.cargaOk)
    {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        document.addEventListener("keydown", dibujarTeclado);
    }
    return posiciones;
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}