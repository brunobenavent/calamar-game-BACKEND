import { Schema, model, Document } from "mongoose";

export interface ITeam extends Document {
  name: string;         // Nombre del equipo (ej. "FC Barcelona")
  shortName: string;    // Abreviatura (ej. "BAR")
  country: string;      // País del equipo (ej. "España")
  logo: string;         // URL del logo del equipo
}

const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    shortName: {
      type: String,
      required: true,
      unique: true
    },
    country: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  },
  { timestamps: true } // Crea automáticamente `createdAt` y `updatedAt`
);

export const Team = model<ITeam>("Team", teamSchema);
