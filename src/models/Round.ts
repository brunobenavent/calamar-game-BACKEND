import { Schema, model, Document } from "mongoose";
import { IGame } from "./Game";
import { IMatch } from "./Match";

export interface IRound extends Document {
  game: IGame;       // Juego al que pertenece la ronda
  roundNumber: number; // Número de la ronda dentro del juego
  matchDay: number;  // Jornada de liga en la que se juega la ronda
  matches: IMatch[]; // Partidos de la jornada
  isCompleted: boolean; // Si la ronda ha finalizado
}

const roundSchema = new Schema<IRound>(
  {
    game: {
      type: Schema.Types.ObjectId,
      ref: "Game",
      required: true
    },
    roundNumber: {
      type: Number,
      required: true
    },
    matchDay: {
      type: Number,
      required: true
    },
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: "Match",
        required: true
      }
    ],
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const Round = model<IRound>("Round", roundSchema);
