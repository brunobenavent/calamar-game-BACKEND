import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";  // Importamos el modelo de User

export interface IGame extends Document {
  gameName: string  // Nombre del juego
  round: number   // Número de la ronda
  players: IUser[]  // Jugadores inscritos en el juego (referencia a User)
  status: string    // Estado del juego (ej. 'iniciado', 'finalizado', 'pendiente')
  prizePool: number // Premio acumulado por los jugadores
}

const gameSchema = new Schema<IGame>(
  {
    gameName: {
        type: String,
        required: true,
        trim: true
    },
    round: {
        type: Number,
        required: true,
        default: 1
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    status: {
      type: String,
      enum: ["pendiente", "en progreso", "finalizado"],
      default: "pendiente",
    },
    prizePool: {
        type: Number,
        default: 0
    },  // Premio del juego
  },
  { timestamps: true }  // Añadimos `timestamps` para crear automáticamente `createdAt` y `updatedAt`
);

export const Game = model<IGame>("Game", gameSchema);
