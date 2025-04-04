import dbClient from "../config/dbClient";

class rutasModel {

    async create(ruta:any) {
        
        const colMascotas = dbClient.db.collection('rutas');
        return await colMascotas.insertOne(ruta)
    }
    
    async getAll() {
        const colMascotas = dbClient.db.collection('rutas');
        return await colMascotas.find()
    }
}

export default new rutasModel