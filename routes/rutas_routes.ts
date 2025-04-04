import { Router } from "express";
import rutasController from "../controllers/rutas_controller";

const route = Router();

route.post('/rutas/', rutasController.create_ruta);
route.get('/rutas/', rutasController.list_all_ruta);
route.get('/rutas/:id', rutasController.list_one_ruta);
route.put('/rutas/:id', rutasController.update_ruta);
route.delete('/rutas/:id', rutasController.delete_ruta);

export default route;
