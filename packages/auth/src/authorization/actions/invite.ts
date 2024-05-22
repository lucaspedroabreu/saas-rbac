import { BaseActionsSchema } from '../actions'

import { z } from 'zod'

export const InviteActionsSchema = BaseActionsSchema.or(
    z.enum(['revoke'])
).refine((action) => action !== 'delete', {
    message: 'For invite actions, you should revoke instead of delete',
})
export type InviteActions = z.infer<typeof InviteActionsSchema>
