import { BaseActionsSchema } from '../actions'

import { z } from 'zod'

export const UserActionsSchema = BaseActionsSchema.or(
    z.enum(['message', 'invite'])
)
export type UserActions = z.infer<typeof UserActionsSchema>
