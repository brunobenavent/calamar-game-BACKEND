import { Schema, model, Document, PopulatedDoc, Types } from 'mongoose'
import { IPrediction } from './Prediction'

export interface IPlayer extends Document {
  alias: string
  user: Types.ObjectId
  game: Types.ObjectId
  predictions: PopulatedDoc<IPrediction & Document>[]
  status: string
}

const playerSchema = new Schema<IPlayer>(
  {
    alias: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true
    },
    predictions: [{
      type: Schema.Types.ObjectId,
      ref: 'Prediction',
      required: true
    }],
    status: {
      type: String,
      required: true,
      enum: ['activo', 'eliminado', 'ganador'],
      default: 'activo'
    },
  },
  { timestamps: true }
)

const Player = model<IPlayer>('Player', playerSchema)
export default Player
