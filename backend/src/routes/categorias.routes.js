import {Router} from "express";


// importo desde controller 
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

// creamos el enrutador
const router = Router();

// configuramos respuesta desde server metodo http get
router.get("/",categoriaController.getCategorias);  //PARA CRUD READ
router.post("/",categoriaController.postCategorias); //PARA CRUD CREATE


// ruta que recibe un parametr0
router.get("/:id",categoriaController.getCategory); // PARA CRUD READ UNA SOLA FILA


// rECIBE PARAMETRO ID D CATEGORIA A BORRAR
router.delete("/:id",categoriaController.deletetCategory); // PARA CRUD DELETE UNA SOLA FILA


// RUTA QUE RECIBE COMO PARAMETRO TANTO EL CUERPO COMO ID A ACTUALIZAR
router.put("/:id",categoriaController.updateCategorias); // PARA CRUD DELETE UNA SOLA FILA


// hacemos disponible al router en toda la app
export default router;