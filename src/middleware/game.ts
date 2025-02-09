import type { Request, Response, NextFunction } from 'express'
import Game, { IGame } from '../models/Game'

declare global {
    namespace Express {
        interface Request {
            game: IGame
        }
    }
}

export async function gameExists( req: Request, res: Response, next: NextFunction ) {
    try {
        const gameActiveExist = await Game.findOne({isActive: true})
        if(gameActiveExist){
            const error = new Error('Ya existe un juego activo')
            return res.status(400).json({error: error.message})
            
        }
        req.game = gameActiveExist
        next()
    } catch (error) {
        res.status(500).json({error: 'Hubo un error'})
    }
}