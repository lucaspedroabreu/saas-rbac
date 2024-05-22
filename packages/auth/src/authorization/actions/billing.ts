import { BaseActionsSchema } from '.'

import { z } from 'zod'

export const BillingActionsSchema = BaseActionsSchema.or(
    z.enum(['export'])
).refine((action) => action !== 'delete', {
    message: 'Billing actions should not delete',
})
export type BillingActions = z.infer<typeof BillingActionsSchema>
