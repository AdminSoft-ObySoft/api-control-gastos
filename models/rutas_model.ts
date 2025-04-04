import dbClient from "../config/dbClient";

class rutasModel {
    private collection = dbClient.db.collection("rutas");
    async create(ruta:any) {
        return await this.collection.insertOne(ruta)
    }
    
    async getAll() {
        return await this.collection.find().toArray();
    }
}

export default new rutasModel();