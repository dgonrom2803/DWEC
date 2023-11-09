function validaMail() {
    var email = document.getElementById("mail");
    if (email.validity.typeMismatch) {
      email.setCustomValidity("¡Correo erróneo!");
    } else {
      email.setCustomValidity("");
    }
  }

  function validaMatricula() {
    var matricula = document.getElementById("matricula");
    if (matricula.validity.typeMismatch) {
      matricula.setCustomValidity("¡Matrícula incorrecta!\nFormato: 0000 + AAA");
    } else {
      matricula.setCustomValidity("");
    }
  }
  
  function fEvento() {
    var bot = document.getElementById("bot");
    bot.addEventListener("click", validaMail, validaMatricula);
  }

  
  window.onload = fEvento; // Necesario esperar que se carguen los elementos HTML