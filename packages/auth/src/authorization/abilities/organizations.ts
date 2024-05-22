import { z } from 'zod'

import { OrganizationActionsSchema } from '../actions'
import { OrganizationSubjectSchema } from '../subjects'

export const OrganizationAbilitiesSchema = z.tuple([
    OrganizationActionsSchema,
    OrganizationSubjectSchema,
])
export type OrganizationAbilities = z.output<typeof OrganizationAbilitiesSchema>
