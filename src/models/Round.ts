import { Schema, model, Document, PopulatedDoc } from 'mongoose';
import { IMatch } from './Match';


export interface IRound extends Document {
  matches: PopulatedDoc<IMatch & Document>[]
  roundNumber: string
}

const roundSchema = new Schema<IRound>(
  {
    roundNumber: {
      type: String,
      required: true
    },
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Match',
        required: true  
      }
    ],
  },
  { timestamps: true }
)

const Round = model<IRound>('Round', roundSchema)
export default Round
