"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rutas_model_1 = __importDefault(require("../models/rutas_model"));
class rutasController {
    constructor() { }
    create_ruta(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield rutas_model_1.default.create(req.body);
                return res.status(201).json(data);
            }
            catch (error) {
                // res.status(500).json({ error: "Error al crear la ruta" });
                next(error);
            }
        });
    }
    update_ruta(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    list_all_ruta(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield rutas_model_1.default.getAll();
                return res.status(200).json(data);
            }
            catch (error) {
                // res.status(500).json({ error: "Error al obtener rutas" });
                next(error);
            }
        });
    }
    list_one_ruta(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    delete_ruta(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = new rutasController();
