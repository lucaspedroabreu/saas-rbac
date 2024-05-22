import { z } from 'zod'

import { UserActionsSchema } from '../actions'
import { UserSubjectSchema } from '../subjects'

export const UserAbilitiesSchema = z.tuple([
    UserActionsSchema,
    UserSubjectSchema,
])
export type UserAbilities = z.output<typeof UserAbilitiesSchema>
