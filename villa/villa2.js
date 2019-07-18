document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/tile.png?alt=media&token=f1ccc3d5-34c9-4000-9e6f-86ec2c29c367";
var xc;
var yc;
var xv;
var yv;
var xp;
var yp;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
};

var fondo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/tile.png?alt=media&token=f1ccc3d5-34c9-4000-9e6f-86ec2c29c367",
    cargaOK: false
}

var vaca = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/vaca.webp?alt=media&token=1f3b14cf-582a-4b50-80a8-ab36752a5b5e",
    cargaOK: false
}

var cerdo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/cerdo.webp?alt=media&token=21bca080-7c4d-488b-9571-05344454bced",
    cargaOK: false
}

var pollo = {
    url: "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/pollo.webp?alt=media&token=6c9f6fce-db46-4420-87f5-e6dc7997543d",
    cargaOK: false
}


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

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        cantidad_vaca = aleatorio(1, 10);
        xv = [cantidad_vaca];
        yv = [cantidad_vaca];
        for (var v=0; v < cantidad_vaca; v++)
        {
            x = aleatorio(0, 420);
            y = aleatorio(0,420);
            xv[v] = x;
            yv[v] = y;
            papel.drawImage(vaca.imagen, x, y);
        }
        
    }
    if(cerdo.cargaOK)
    {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        xc = x
        yc = y
        papel.drawImage(cerdo.imagen, x, y);
    }
    if(pollo.cargaOK)
    {
        cantidad_pollo = aleatorio(1, 10);
        xp = [cantidad_pollo];
        yp = [cantidad_pollo];
        for(var p=0; p < cantidad_pollo; p++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            xp[p] = x;
            yp[p] = y;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function dibujar_cerdo()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for (var i=0; i < xv.length; i++)
        {
        papel.drawImage(vaca.imagen, xv[i], yv[i]);
        } 
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, xc, yc);
    }
    if(pollo.cargaOK)
    {
        for (var i=0; i < xp.length; i++)
        {
        papel.drawImage(pollo.imagen, xp[i], yp[i]);
        }
    }

}




function dibujarTeclado(evento)
{
    var movimiento = 5;
    switch (evento.keyCode) 
    {
        case teclas.UP:
            dibujar_cerdo();
            yc = yc - movimiento;
        break;
        case teclas.DOWN:
            dibujar_cerdo();
            yc = yc + movimiento;            
        break;
        case teclas.LEFT:
            dibujar_cerdo();
            xc = xc - movimiento;            
        break;
        case teclas.RIGHT:
            dibujar_cerdo();
            xc = xc + movimiento;  
        break;
               
        default:
            console.log("otra tecla");
    break;
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}