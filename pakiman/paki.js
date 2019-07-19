var imagenes = [];
imagenes['Cauchin'] = "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/vaca.webp?alt=media&token=1f3b14cf-582a-4b50-80a8-ab36752a5b5e";
imagenes['Pokacho'] = "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/cerdo.webp?alt=media&token=21bca080-7c4d-488b-9571-05344454bced";
imagenes['Tocinauro'] = "https://firebasestorage.googleapis.com/v0/b/cursoplatzi-839b5.appspot.com/o/cerdo.webp?alt=media&token=21bca080-7c4d-488b-9571-05344454bced";

var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var freddito of coleccion)
{
    freddito.mostrar();
}

/*
for(var freddito in coleccion)
{
    console.log(coleccion[freddito]);
}
*/