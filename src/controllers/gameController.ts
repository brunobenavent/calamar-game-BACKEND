import { Request, Response } from 'express'
import { getCurrentSeason } from '../utils/dates'
import api from '../lib/axios'
import { footballMatchesResponseSchema, footballRoundsResponseSchema } from '../schema/football-schema'
import Game from '../models/Game'
import Round from '../models/Round'

export class GameController {
  // Método para crear un nuevo juego
  static createGame = async (req: Request, res: Response) => {
    const { gameName } = req.body;
    const currentSeason = getCurrentSeason()

    //Registrar Equipos de la temporada
    const currentTeams = await api.get(`https://v3.football.api-sports.io/fixtures/rounds?league=140&season=${currentSeason}`)

    const responseTeams = footballRoundsResponseSchema.safeParse(currentTeams.data.response)
    if (!responseTeams.success) {
      return res.status(500).json({ message: 'Error al obtener los equipos de la temporada' })
    }
    
    //Obtener curretRound
    const data = await api.get(`/fixtures/rounds?league=140&season=${currentSeason}&current=true`)
    const responseCurrentRound = footballRoundsResponseSchema.safeParse(data.data.response)
    if (!responseCurrentRound.success) {
      return res.status(500).json({ message: 'Error al obtener la jornada actual' })
    }
    const [currentRound] = responseCurrentRound.data
    
    // Llamamos a la API para obtener las ligas antes de crear el juego
    const url: string = `/fixtures?league=140&season=${currentSeason}&round=${currentRound}`
    const {data: {response}} = await api.get(url)

    const matchesResponse  =  footballMatchesResponseSchema.safeParse(response)
    if (!matchesResponse.success) {
      return res.status(500).json({ message: 'Error al obtener los partidos de la jornada' })
    }
    const newRound = new Round({matches:matchesResponse.data})
    const newGame = new Game({gameName})
    newGame.gameRounds.push(newRound)

    try {
      await Promise.allSettled([newGame.save(), newRound.save()])
      res.status(201).json('Juego creado correctamente')
      
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el juego o al obtener las ligas', error })
      
    }
  }

   // Método para obtener todos los juegos
   static getAllGames = async (req: Request, res: Response) => {
    const games = Game.find()
    try {
      res.status(200).json(games)
    } catch (error) {
      console.log(error)
    }
  }
   static getGameById = async (req: Request, res: Response) => {
    const game = Game.findById(req.params.id)
    try {
      res.status(200).json(game)
    } catch (error) {
      console.log(error)
    }
  }
}
