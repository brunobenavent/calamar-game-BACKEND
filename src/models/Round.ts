import { Schema, model, Document } from "mongoose";
import { IGame } from "./Game";
import { IMatch } from "./Match";

export interface IRound extends Document {
  matches: IMatch[];       // Partidos de la jornada
  roundNumber: string; // Número de la jornada de liga
}

const roundSchema = new Schema<IRound>(
  {
    roundNumber: {
      type: String,
      required: true
    },
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: "Match",
        required: true  
      }
    ],
  },
  { timestamps: true }
);

export const Round = model<IRound>("Round", roundSchema);
