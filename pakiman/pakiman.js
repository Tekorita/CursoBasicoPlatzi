class Pakiman
{
    constructor(n, v, a)
    {
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: <strong>" + this.vida + "</strong><br />");
        document.write("Ataque: <strong>" + this.ataque + "</strong><br />");
        document.write("</p><hr />")

    }
}