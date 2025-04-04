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
const dbClient_1 = __importDefault(require("../config/dbClient"));
class rutasModel {
    create(ruta) {
        return __awaiter(this, void 0, void 0, function* () {
            const colMascotas = dbClient_1.default.db.collection('rutas');
            return yield colMascotas.insertOne(ruta);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const colMascotas = dbClient_1.default.db.collection('rutas');
            return yield colMascotas.find();
        });
    }
}
exports.default = new rutasModel;
