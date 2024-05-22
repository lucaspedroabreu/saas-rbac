import { z } from 'zod'

export const BillingSubjectSchema = z.literal('Billing')
export type BillingSubject = z.infer<typeof BillingSubjectSchema>
