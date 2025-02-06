import { z } from 'zod'

export const footballMatchResponseSchema = z.object({
    fixture: z.object({
        date: z.string(),
        periods: z.object({
            first: z.nullable(z.number()),
            second: z.nullable(z.number())
        }),
        status: z.object({
            long: z.string()
        })
    }),
    league: z.object({
        season: z.number(),
        round: z.string()
    }),
    teams: z.object({
        home: z.object({
            name: z.string(),
            logo: z.string(),
            winner: z.nullable(z.boolean())
        }),
        away: z.object({
            name: z.string(),
            logo: z.string(),
            winner: z.nullable(z.boolean())
        })
    }),
    goals: z.object({
        home: z.nullable(z.number()),
        away: z.nullable(z.number())
    })
})

export const footballTeamRequestSchema = z.object({
    team: z.object({
        name: z.string(),
        logo: z.string(),
        winner: z?.boolean()
    })
    
})
export const footballMatchesResponseSchema = z.array(footballMatchResponseSchema)
export const footballTeamsRequestSchema = z.array(footballTeamRequestSchema)
export const footballRoundsResponseSchema = z.array(z.string());
