import { createServer } from 'http';
import {suma} from './miModulo.mjs';
import {Saludo}  from './miClase.mjs';
var saluda = new Saludo();
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); // Devuelve '/directorio'
    res.end();
  }).listen(8080);