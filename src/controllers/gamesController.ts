import { Request, Response } from "express";
import pool from "../database";
class GamesController {
  public async list(req: Request, res: Response) {
    const lista = await pool.query("SELECT * FROM games");
    //console.log(lista);
    res.json(lista);
  }
  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const lista = await pool.query("SELECT * FROM games WHERE ID= ?", [id]);
    //console.log(lista);
    if (lista.length > 0) {
      res.json( lista[0]);
    }
    res.status(404).json({ text: "El juego no ha sido encontrado " });
  }
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO games set ?", [req.body]);
    res.json({ message: "Juego guardado" });
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM games WHERE ID= ?", [id]);
    //console.log(lista);
    res.json({ message: "eliminado la wea cuatica" + ": " + [id] });
  }
  public async update(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    await pool.query("UPDATE games set ? where  id= ?",[req.body,id]);
    res.json({ message: "Juego actualizado" });
  }
}
export const gamesController = new GamesController();
