import { Schema, model, Document } from "mongoose";
import { IPlayer } from "./Player";  // Importamos el modelo Player
import { IMatch } from "./Match";// Importamos el modelo Match

export interface IPrediction extends Document {
  player: IPlayer;    // Jugador que hace la predicción
  match: IMatch;      // Partido al que pertenece la predicción
  teamPredicted: string; // Equipo elegido (ej. "Barcelona")
  result: string;     // Resultado de la predicción (ej. "acertado", "fallado", "pendiente")
  round: number;      // Ronda en la que se hizo la predicción
}

const predictionSchema = new Schema<IPrediction>(
  {
    player: {
      type: Schema.Types.ObjectId,
      ref: "Player",
      required: true
    },
    match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
      required: true
    },
    teamPredicted: {
      type: String,
      required: true
    },
    result: {
      type: String,
      enum: ["pendiente", "acertado", "fallado"],
      default: "pendiente"
    },
    round: {
      type: Number,
      required: true
    }
  },
  { timestamps: true } // Agregamos createdAt y updatedAt automáticamente
);

export const Prediction = model<IPrediction>("Prediction", predictionSchema);
