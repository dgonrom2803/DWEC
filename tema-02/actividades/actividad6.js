function cambio() {
    var mensaje;
    var cambio;
    var num1 = prompt("Proporcione una velocidad en km/h: ");
    if (num1 == null || num1 == "") {
      mensaje = "El número proporcionado no es correcto";
    } else {
      cambio = num1 * (5/18);
      mensaje = cambio;
    }
    alert(mensaje);
  }