import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'
import { GameController } from '../controllers/gameController';


const router = Router();

router.post( "/",
  body('gameName').isLength({ min: 3 }).withMessage('El nombre del juego debe tener al menos 3 caracteres'),
  handleInputErrors,
  GameController.createGame
);

router.get("/", GameController.getAllGames); 
router.get("/:id",
  param('id').isMongoId().withMessage('El id del juego no es válido'),
  handleInputErrors, 
  GameController.getGameById)


export default router;
