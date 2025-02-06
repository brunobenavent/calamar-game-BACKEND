import mongoose, { Schema, model, Document } from 'mongoose';
import { IUser } from './User';  // Importamos el modelo de User
import { IRound } from './Round';

export type GameType = Document &{
  gameName: string  // Nombre del juego
  isActive: boolean  // Indica si el juego está activo
  gameRounds: IRound[]  // Rondas del juego
  players: IUser[]  // Jugadores inscritos en el juego (referencia a User)
  status: string    // Estado del juego (ej. 'iniciado', 'finalizado', 'pendiente')
  prizePool: number // Premio acumulado por los jugadores
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
        ref: 'User',
        default: []
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
    prizePool: {
        type: Number,
        default: 0
    },  // Premio del juego
  },
  { timestamps: true }  // Añadimos `timestamps` para crear automáticamente `createdAt` y `updatedAt`
);

const Game = model<GameType>('Game', GameSchema)
export default Game
