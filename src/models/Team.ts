import { Schema, model, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string
  logo: string
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
  { timestamps: true }
)

const Team = model<ITeam>('Team', teamSchema)
export default Team
