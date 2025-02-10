import { Schema, model, Document, Types } from 'mongoose';
import { IMatch, matchSchema } from './Match'; // Importamos el modelo y el esquema de Match

export interface IRound extends Document {
  matches: Types.Array<IMatch>; // Un array de partidos (IMatch[])
}

const roundSchema = new Schema<IRound>({
  matches: [matchSchema], // Array de partidos, basado en el esquema de Match
});

const Round = model<IRound>('Round', roundSchema);
export default Round;
