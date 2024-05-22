import { z } from 'zod'
import { BaseActionsSchema } from '../actions'

export const OrganizationActionsSchema = BaseActionsSchema.or(
    z.enum(['transfer_ownership'])
)
export type OrganizationActions = z.infer<typeof OrganizationActionsSchema>
