import { z } from 'zod'

import { InviteActionsSchema } from '../actions'
import { InviteSubjectSchema } from '../subjects'

export const InviteAbilitiesSchema = z.tuple([
    InviteActionsSchema,
    InviteSubjectSchema,
])
export type InviteAbilities = z.output<typeof InviteAbilitiesSchema>
