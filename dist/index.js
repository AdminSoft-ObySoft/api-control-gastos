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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const rutas_routes_1 = __importDefault(require("./routes/rutas_routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbClient_1 = __importDefault(require("./config/dbClient")); // Importa la conexión
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', rutas_routes_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbClient_1.default.conectarBD(); // ✅ Se conecta antes de levantar el servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`🚀 Servidor en el puerto ${PORT}`));
    }
    catch (error) {
        console.error("❌ No se pudo iniciar el servidor:", error);
    }
});
startServer().catch((error) => {
    console.error("Error al iniciar el servidor:", error);
}); // Llama a la función para iniciar el servidor
