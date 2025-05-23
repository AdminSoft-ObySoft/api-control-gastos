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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require("dotenv/config");
class dbClient {
    constructor() {
        const queryString = process.env.MONGO_URL;
        if (!queryString) {
            throw new Error("❌ MONGO_URL no está definida en .env");
        }
        this.client = new mongodb_1.MongoClient(queryString);
        // this.conectarBD();
    }
    conectarBD() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                this.db = this.client.db('control-gastos');
                console.log("🔥 Conectado a MongoDB");
            }
            catch (error) {
                console.error("❌ Error al conectar a MongoDB:", error);
                process.exit(1); // Detiene la ejecución si no puede conectar
            }
        });
    }
}
exports.default = new dbClient();
