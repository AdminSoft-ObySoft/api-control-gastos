import express from "express";
import "dotenv/config";
import routesRutas from "./routes/rutas_routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/', routesRutas);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>console.log(`Servidor escuchando en el puerto ${PORT}`));
} catch (error) {
    console.error(error);
}