import { Schema, model, Document } from "mongoose";

export interface ITeam extends Document {
  name: string;         // Nombre del equipo (ej. "FC Barcelona")
  logo: string;         // URL del logo del equipo 

}

const teamSchema = new Schema<ITeam>(
  {
    name: {
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
