import { NextFunction, Request, Response } from "express";
import rutasModel from "../models/rutas_model";

class rutasController {
    constructor(){}

    async create_ruta(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await rutasModel.create(req.body);
            return res.status(201).json(data);
        } catch (error) {
            // res.status(500).json({ error: "Error al crear la ruta" });
            next(error);
        }
        
    }
    async update_ruta(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            
        }
        
    }
    async list_all_ruta(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await rutasModel.getAll();
            return res.status(200).json(data);
            
        } catch (error) {
            // res.status(500).json({ error: "Error al obtener rutas" });
            next(error);
        }
        
    }
    async list_one_ruta(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            
        }
        
    }
    async delete_ruta(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (error) {
            
        }
        
    }
}

export default new rutasController();