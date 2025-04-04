"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const rutas_routes_1 = __importDefault(require("./routes/rutas_routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api/', rutas_routes_1.default);
try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
}
catch (error) {
    console.error(error);
}
