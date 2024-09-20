const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "likeme",
  allowExitOnIdle: true,
});

//Agregar Registros
const agregarRegistro = async (titulo, url, descripcion, like) => {
  const consulta =
    "INSERT INTO posts values (DEFAULT,$1, $2, $3, $4) RETURNING *";
  const values = [titulo, url, descripcion, 0];
  await pool.query(consulta, values);
  console.log("Informacion de Registro agregada");
};

//Obtener Registros
const obtenerRegistros = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log("Registros de la BD: ", rows);
  return rows;
};

//Modificar Registros
const modificarRegistros = async (id) => {
  const consulta = "UPDATE posts SET likes = (likes + 1) WHERE id = $1;";
  const values = [id];
  await pool.query(consulta, values);
};

//Eliminar Registros
const eliminarRegistros = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1"
  const values = [id]
  await pool.query(consulta, values) 
}

module.exports = { agregarRegistro, obtenerRegistros, modificarRegistros, eliminarRegistros };
