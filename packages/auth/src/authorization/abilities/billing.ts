import { z } from 'zod'

import { BillingActionsSchema } from '../actions'
import { BillingSubjectSchema } from '../subjects'

export const BillingAbilitiesSchema = z.tuple([
    BillingActionsSchema,
    BillingSubjectSchema,
])
export type BillingAbilities = z.output<typeof BillingAbilitiesSchema>
