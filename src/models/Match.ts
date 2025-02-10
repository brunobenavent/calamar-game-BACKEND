import { Schema, model, Document } from 'mongoose';

export interface IMatch extends Document {
  fixture: {
    date: string;
    periods: {
      first: number | null;
      second: number | null;
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
      winner: boolean | null;
    };
    away: {
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
}

export const matchSchema: Schema = new Schema({
  fixture: {
    date: { type: String, required: true },
    periods: {
      first: { type: Number, default: null },
      second: { type: Number, default: null},
    },
    status: {
      long: {
        type: String
        
      
      },
    },
  },
  league: {
    season: { type: Number},
    round: { type: String },
  },
  teams: {
    home: {
      name: { type: String },
      logo: { type: String },
      winner: { type: Boolean, default: null },
    },
    away: {
      name: { type: String },
      logo: { type: String},
      winner: { type: Boolean, default: null },
    },
  },
  goals: {
    home: { type: Number, default: null },
    away: { type: Number, default: null },
  },
});
const Match = model<IMatch>('Match', matchSchema);
export default Match;
