import { Schema, model, Document } from "mongoose";
import { IMatch } from "./Match";

export interface ISeason extends Document {
  year: string;          // Temporada (ej. "2024-2025")
  league: string;        // Nombre de la liga (ej. "LaLiga", "Premier League")
  matches: IMatch[];     // Partidos de la temporada
  currentMatchDay: number;  // Jornada actual de la liga
}

const seasonSchema = new Schema<ISeason>(
  {
    year: {
      type: String,
      required: true
    },
    league: {
      type: String,
      required: true
    },
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: "Match"
      }
    ],
    currentMatchDay: {
      type: Number,
      required: true,
      default: 1
    }
  },
  { timestamps: true } // Crea `createdAt` y `updatedAt`
);

export const Season = model<ISeason>("Season", seasonSchema);
