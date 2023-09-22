function suma() {
  var mensaje;
  var suma;
  var num1 = prompt("Proporcione el primer número: ");
  var num2 = prompt("Proporcione el segundo número: ");
  if (num1 == null || num1 == "") {
    mensaje = "El número proporcionado no es correcto";
  } else if (num2 == null || num2 == "") {
    mensaje = "El número proporcionado no es correcto";
  } else {
    suma = parseInt(num1) + parseInt(num2);
    mensaje = suma;
  }
  alert(mensaje);
}
