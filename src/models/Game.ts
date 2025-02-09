import  { Schema, model, Document, PopulatedDoc } from 'mongoose'

import { IPlayer } from './Player'
import { IRound } from './Match'


export interface IGame extends Document {
  gameName: string
  isActive: boolean
  gameRounds: PopulatedDoc<IRound & Document>[]
  players: PopulatedDoc<IPlayer & Document>[]
  status: string
  prizePool: number
}
const GameSchema: Schema = new Schema(
  {
    gameName: {
        type: String,
        trim: true,
        required: true
    },
    gameRounds: [{
        type: Schema.Types.ObjectId,
        ref: 'Round',
        default: []
    }],
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player',
        default: []
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
    prizePool: {
        type: Number,
        default: 0
    },
  },
  { timestamps: true }  
)

const Game = model<IGame>('Game', GameSchema)
export default Game
