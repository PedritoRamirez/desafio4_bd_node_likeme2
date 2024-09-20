// index principal que levantara el servidor e importara las funciones de consulta.js
// se crearan las rutas de acceso
const cors = require("cors");
const express = require("express");
const app = express();
const {
  agregarRegistro,
  obtenerRegistros,
  modificarRegistros,
  eliminarRegistros,
} = require("./consultas");
const PORT = 3000;

// middleware
app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log(`SERVIDOR ENCENDIDO EN PUERTO: ${PORT}`));

//Obtener Registros
app.get("/posts", async (req, res) => {
  try {
    const registros = await obtenerRegistros();
    res.json(registros);
  } catch (error) {
    //res.status(500).send(error);
    res.status(500).send(error.message)
  }
});

//Agregar Registros
app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await agregarRegistro(titulo, url, descripcion);
    res.send("Registro agregado con éxito");
  } catch (error) {
    //res.status(500).send(error);
    res.status(500).send(error.message)
  }
});

//Modificando Registros
app.put("/posts/like/:id", async (req, res) => {
  try {
    const idModificado = req.params.id;
    await modificarRegistros(idModificado);
    res.send("Registro modificado con éxito");
  } catch (error) {
    res.status(500).send(error.message)
    //res.status(500).send(error);
  }
});

//eliminarRegistros
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarRegistros(id);
    res.send("Registro eliminado con éxito");
  } catch (error) {
    //res.status(500).send(error);
    res.status(500).send(error.message);
  }
});

// Esto es por sino se accedio a ninguna de las rutas programadas
app.use("*", async (req, res) => {
  res.send("Error 404 Ruta no encontrada");
});
