class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    } 
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if(dinero > 0)
    {
        resultado.innerHTML = "No hay billetes suficientes para la transaccion";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $"+ e.valor + "<br>";
                //resultado.innerHTML += e.cantidad + " billetes de $"+ e.valor + "<br>";
            }   
        }
    }
    console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push(new Billete(100,30));
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));
caja.push(new Billete(5,2));

var dinero;
var div = 0;
var papeles = 0;

var b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado");
