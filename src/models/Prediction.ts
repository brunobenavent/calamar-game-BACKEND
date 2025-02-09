import { Schema, model, Document, Types } from 'mongoose'

export interface IPrediction extends Document {
  player: Types.ObjectId
  match: Types.ObjectId
  teamPredicted: string
}

const predictionSchema = new Schema<IPrediction>(
  {
    player: {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      required: true
    },
    match: {
      type: Schema.Types.ObjectId,
      ref: 'Match',
      required: true
    },
    teamPredicted: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

const Prediction = model<IPrediction>('Prediction', predictionSchema)
export default Prediction