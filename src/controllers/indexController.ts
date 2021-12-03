import {Request, Response} from 'express';
class IndexController{
    index(req: Request, res: Response){
         res.send('Hola pes la wea cuatica')
    }
}
export const indexController = new IndexController();