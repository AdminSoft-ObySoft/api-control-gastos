import express from "express";
import "dotenv/config";
import routesRutas from "./routes/rutas_routes";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient"; // Importa la conexión

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', routesRutas);

const startServer = async () => {
    try {
        await dbClient.conectarBD(); // ✅ Se conecta antes de levantar el servidor

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`🚀 Servidor en el puerto ${PORT}`));
    } catch (error) {
        console.error("❌ No se pudo iniciar el servidor:", error);
    }
};

startServer().catch((error) => {
    console.error("Error al iniciar el servidor:", error);
}); // Llama a la función para iniciar el servidor