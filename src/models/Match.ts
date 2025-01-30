import { Schema, model, Document } from "mongoose";

export interface IMatch extends Document {
  matchDay: number;    // Jornada a la que pertenece el partido
  homeTeam: string;    // Nombre del equipo local
  awayTeam: string;    // Nombre del equipo visitante
  homeScore?: number;  // Goles del equipo local (opcional, antes de jugar puede no haber goles)
  awayScore?: number;  // Goles del equipo visitante
  status: string;      // Estado del partido ("sin comenzar", "en juego", "finalizado", etc.)
  date: Date;          // Fecha y hora del partido
}

const matchSchema = new Schema<IMatch>(
  {
    matchDay: {
      type: Number,
      required: true
    },
    homeTeam: {
      type: String,
      required: true
    },
    awayTeam: {
      type: String,
      required: true
    },
    homeScore: {
      type: Number,
      default: null
    },
    awayScore: {
      type: Number,
      default: null
    },
    status: {
      type: String,
      required: true,
      enum: ["sin comenzar", "en juego", "finalizado", "suspendido", "aplazado"],
      default: "sin comenzar"
    },
    date: {
      type: Date,
      required: true
    }
  },
  { timestamps: true } // Crea automáticamente `createdAt` y `updatedAt`
);

export const Match = model<IMatch>("Match", matchSchema);
