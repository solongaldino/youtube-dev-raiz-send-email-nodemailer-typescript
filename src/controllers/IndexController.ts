import { Request, Response } from 'express';

class IndexController{

    public async test(req: Request, res: Response) : Promise<Response>{
        return res.send({"test": "Olá Mundo!"});

    }
} export default new IndexController;