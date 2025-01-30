import { GameController } from "../controllers/gameController";
import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'


const router = Router();

router.post( "/",
  body('gameName').isLength({ min: 3 }).withMessage('El nombre del juego debe tener al menos 3 caracteres'),
  handleInputErrors,
  GameController.createGame
);

router.get("/", GameController.getAllGames); 
 
// Obtener todos los juegos

export default router;
  handleInputErrors
