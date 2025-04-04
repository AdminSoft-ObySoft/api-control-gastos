import rutasModel from "../models/rutas_model";

class rutasController {
    constructor(){}

    async create_ruta(req:any, res:any) {
        try {
            const data = rutasModel.create(req.body)
            console.log(data);
            
            return res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
        
    }
    async update_ruta(req:any, res:any) {
        try {
            const data = rutasModel.getAll();
            console.log(data);
            
            return res.status(201).json(data);
        } catch (error) {
            
        }
        
    }
    async list_all_ruta(req:any, res:any) {
        try {
            const data = rutasModel.getAll();
            return res.status(201).json(data);
            
        } catch (error) {
            
        }
        
    }
    async list_one_ruta(req:any, res:any) {
        try {
            
        } catch (error) {
            
        }
        
    }
    async delete_ruta(req:any, res:any) {
        try {
            
        } catch (error) {
            
        }
        
    }
}

export default new rutasController();