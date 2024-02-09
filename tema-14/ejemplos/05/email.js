// Envío de EMAIL

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'diegogonzalezromero7@gmail.com', // Cuenta que se usa para el envío
      pass: 'uhxy ykyh zmwa uezn'  // Poner password
    }
  });
  
  var mailOptions = {
    from: 'diegogonzalezromero7@gmail.com', // Correo remitente
    to: 'pmatpal0105@g.educaand.es', // Correo destino
    subject: 'Enviando correo desde Node.js',
    html: '<h1>Hola desde Node.js</h1>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });