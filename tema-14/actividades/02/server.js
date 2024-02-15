import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import path from "path";

const uri =
  "mongodb+srv://dgonrom2803:dgonrom2803@gesdwec.mka3zc2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6

async function run() {
  try {
    await client.connect();

    const database = client.db("Alumnos");
    const collection = database.collection("2DAW");

    // Realiza una operación de lectura (por ejemplo, encuentra todos los documentos en la colección)
    const documentos = await collection.find({}).toArray();
    console.log("Documentos en la colección '2DAW':");
    console.log(documentos);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use("/", router);
app.use(express.static(__dirname)); //IMPORTANTE carga archivos js,css, etc.., cargados en los html desde directorio
app.listen(3000);
console.log("Escuchando en puerto 3000");
