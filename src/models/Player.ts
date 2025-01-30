import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";  // Importamos el modelo de User
import { IGame } from "./Game";  // Importamos el modelo de Game

export interface IPlayer extends Document {
  user: IUser;      // Usuario que es jugador
  game: IGame;      // Juego en el que participa
  round: number;    // Ronda actual del jugador
  prediction: string; // Pronóstico del jugador (ej. "Barcelona gana")
  status: string;   // Estado del jugador (ej. "activo", "eliminado", etc.)
  prize: number;    // Premio acumulado si el jugador gana
}

const playerSchema = new Schema<IPlayer>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: "Game",
      required: true
    },
    round: {
      type: Number,
      required: true,
      default: 1
    },
    prediction: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ["activo", "eliminado", "ganador"],
      default: "activo"
    },
    prize: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }  // Añadimos `timestamps` para crear automáticamente `createdAt` y `updatedAt`
);

export const Player = model<IPlayer>("Player", playerSchema);
