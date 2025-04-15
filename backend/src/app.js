// importamos al framework express
import express from "express";

// asignamos a app toda la funcionalidad para mi servidor web
const app = express();

// setear a un puerto a mi servidor web
app.set("port",5000);

// Hacemos disponible a mi server app para toda la apliacion
export default app;