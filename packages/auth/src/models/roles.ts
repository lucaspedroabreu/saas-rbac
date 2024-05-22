import { z } from 'zod'

export const roleSchema = z.enum(['MEMBER', 'ADMIN', 'SUPERADMIN', 'BILLING'])
export type Role = z.input<typeof roleSchema>
