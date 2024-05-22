import { z } from 'zod'

export const roleSchema = z.enum(['MEMBER', 'ADMIN', 'BILLING'])
export type Role = z.input<typeof roleSchema>
