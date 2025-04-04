"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutas_controller_1 = __importDefault(require("../controllers/rutas_controller"));
const route = (0, express_1.Router)();
route.post('/rutas/', rutas_controller_1.default.create_ruta);
route.get('/rutas/', rutas_controller_1.default.list_all_ruta);
route.get('/rutas/:id', rutas_controller_1.default.list_one_ruta);
route.put('/rutas/:id', rutas_controller_1.default.update_ruta);
route.delete('/rutas/:id', rutas_controller_1.default.delete_ruta);
exports.default = route;
