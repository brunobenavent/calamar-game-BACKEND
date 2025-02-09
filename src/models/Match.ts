import { Schema, model, Document } from 'mongoose';

export interface IMatch extends Document {
  fixture: {
    date: string;
    periods: {
      first: number;
      second: number;
    };
    status: {
      long: string;
    };
  };
  league: {
    season: number;
    round: string;
  };
  teams: {
    home: {
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
}

const matchSchema: Schema = new Schema({
  fixture: {
    date: { type: String, required: true },
    periods: {
      first: { type: Number, required: true },
      second: { type: Number, required: true },
    },
    status: {
      long: { type: String, required: true },
    },
  },
  league: {
    season: { type: Number, required: true },
    round: { type: String, required: true },
  },
  teams: {
    home: {
      name: { type: String, required: true },
      logo: { type: String, required: true },
      winner: { type: Boolean, required: true },
    },
    away: {
      name: { type: String, required: true },
      logo: { type: String, required: true },
      winner: { type: Boolean, required: true },
    },
  },
  goals: {
    home: { type: Number, required: true },
    away: { type: Number, required: true },
  },
});
const Match = model<IMatch>('Match', matchSchema);
export type IRound = IMatch[];
export default Match;
