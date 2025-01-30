import { Schema, model, Document } from "mongoose";
import { IGame } from "./Game"; // Importamos el modelo de Game

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  credit: number;
  confirmed: boolean;
  games: Array<{
    game: IGame;
    status: string;  // Estado del juego (ej. 'finalizado', 'actual')
  }>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    credit: {
      type: Number,
      required: true,
      default: 0
    },
    confirmed: {
      type: Boolean,
      default: false
    },
    games: [{
      game: {
        type: Schema.Types.ObjectId,
        ref: "Game",
        required: true
      },
      status: {
        type: String,
        enum: ["finalizado", "actual"],
        default: "finalizado"
      }
    }]
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
