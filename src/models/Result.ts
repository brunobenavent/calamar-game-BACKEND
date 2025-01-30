import { Schema, model, Document } from "mongoose";
import { IMatch } from "./Match";
import { ITeam } from "./Team";

export interface IResult extends Document {
  match: IMatch;      // Partido al que pertenece el resultado
  winner?: ITeam;     // Equipo ganador (si hay)
  isDraw: boolean;    // Si el partido fue empate
  homeScore: number;  // Goles del equipo local
  awayScore: number;  // Goles del equipo visitante
}

const resultSchema = new Schema<IResult>(
  {
    match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
      required: true
    },
    winner: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      default: null
    },
    isDraw: {
      type: Boolean,
      required: true
    },
    homeScore: {
      type: Number,
      required: true
    },
    awayScore: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export const Result = model<IResult>("Result", resultSchema);
