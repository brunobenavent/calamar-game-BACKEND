import { Request, Response } from "express";
import { Game } from "../models/Game";

export class GameController {
  // Método para crear un nuevo juego
  static createGame = async (req: Request, res: Response): Promise<void> => {
    try {
      const { gameName } = req.body;

      // Crear un nuevo juego
      const newGame = new Game({ gameName });
      await newGame.save(); // Guardar el juego en la base de datos

      // Responder con el juego creado
      res.status(201).json(newGame);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el juego", error });
    }
  };

  // Método para obtener todos los juegos
  static getAllGames = async (req: Request, res: Response): Promise<void> => {
    try {
      const games = await Game.find();
      res.status(200).json(games); // Responder con todos los juegos
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los juegos", error });
    }
  };
}
