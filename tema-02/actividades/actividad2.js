function pregunta() {
    var mensaje;
    var opcion = prompt("¿Número de hijos?");
  
    if (opcion == null || opcion == "" || opcion == 0) {
      mensaje = "No tienes ningún hijo";
    } else {
      mensaje = "Tienes " + opcion + " hijos";
    }
    alert(mensaje);
  }