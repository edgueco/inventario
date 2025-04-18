// importamos al framework express
import express from "express";

// importo routers pero como no va ser la unica le coloco el alas y la aplicacion entiende que es esta categoriasRoutes 
import categoriasRoutes from "./routes/categorias.routes.js";

// asignamos a app toda la funcionalidad para mi servidor web
const app = express();

// setear a un puerto a mi servidor web
app.set("port",5000);


// routes
app.use("/api/categorias",categoriasRoutes);

// Hacemos disponible a mi server app para toda la apliacion
export default app;