var btnClick = document.getElementById('btnClick');
var startTime, endTime;

/*Cuando se haga clic*/
btnClick.onmousedown = function() {
  startTime = new Date();
  console.log("Estoy presionado, haz lo que necesites...");
};

/*Cuando se deje de hacer clic*/
btnClick.onmouseup = function() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //en ms
  console.log("Se hizo clic:\n" + startTime);
  console.log("Se levantó el clic:\n" + endTime);
  console.log("Tiempo transcurrido:\n" + timeDiff + " ms");
};