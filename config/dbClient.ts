import { Db, MongoClient } from "mongodb";
import "dotenv/config";


class dbClient {

    private client: MongoClient;
    public db!: Db;  // Variable para almacenar la base de datos

    constructor() {
        const queryString = process.env.MONGO_URL as string;
        if (!queryString) {
          throw new Error("❌ MONGO_URL no está definida en .env");
        }
        this.client = new MongoClient(queryString);
        // this.conectarBD();
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db('control-gastos');
            console.log("🔥 Conectado a MongoDB");
          } catch (error) {
            console.error("❌ Error al conectar a MongoDB:", error);
            process.exit(1); // Detiene la ejecución si no puede conectar
            
          }
    }
}

export default new dbClient();