import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string
  email: string
  password: string
  credit: number
  confirmed: boolean
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
        }
    },
    { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
