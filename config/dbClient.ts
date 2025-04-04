import { Db, MongoClient } from "mongodb";
import "dotenv/config";


class dbClient {

    private client: MongoClient;
    public db!: Db;  // Variable para almacenar la base de datos

    constructor() {
        const queryString = process.env.MONGO_URL as string;
        this.client = new MongoClient(queryString);
        this.conectarBD();
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db('control-gastos');
            console.log("🔥 Conectado a MongoDB");
          } catch (error) {
            console.error("❌ Error al conectar a MongoDB:", error);
          }
    }
}

export default new dbClient;