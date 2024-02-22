import express from "express";
import path from "path";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://dgonrom2803:dgonrom2803@gesdwec.mka3zc2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const app = express();
var __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Esta es la ruta para agregar registros
app.post("/agregar-registro", async (req, res) => {
  try {
    const registro = req.body;
    const queryAll = await run(registro);
    res.json(queryAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});


async function run(registro) {
  try {
    const database = client.db('Alumnos');
    const datos = database.collection('2DAW');
    
    // Inserta registros en la base de datos si el nombre no está vacío
    if (registro.nombre !== "") {
      await datos.insertOne(registro);
    }

    // Consulta todos los documentos y espera a que se resuelva la promesa
    const queryAll = await datos.find().toArray();
    
    // Devuelve los documentos consultados
    return queryAll;
  } catch (error) {
    console.error(error);
    
    throw error;
  }
}

app.listen(3000, () => {
  console.log("Escuchando en puerto 3000");
});
