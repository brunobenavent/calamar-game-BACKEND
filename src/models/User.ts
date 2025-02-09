import { Schema, model, Document, PopulatedDoc } from 'mongoose'
import { IGame } from './Game'
import { IPlayer } from './Player'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  credit: number
  confirmed: boolean
  player: PopulatedDoc<IPlayer & Document>
  games: PopulatedDoc<IGame & Document>[]
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
        type: Schema.Types.ObjectId,
        ref: 'Game',
        default: []
    }]
  },
  { timestamps: true }
)

const User = model<IUser>('User', userSchema)
export default User
