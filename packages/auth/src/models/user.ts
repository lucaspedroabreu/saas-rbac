import { z } from 'zod'
import { roleSchema } from './roles'

export const userSchema = z.object({
    name: z
        .string({ message: 'Name bust be a string' })
        .min(1, 'User must have a name')
        .min(2, 'Name must be at least 2 characters long'),
    email: z
        .string({ message: 'Email must be a string' })
        .min(1, 'Must entar an email!')
        .email({ message: 'Must enter a valid email address' }),
    role: roleSchema,
})

export type UserRequest = z.input<typeof userSchema>
export type User = z.output<typeof userSchema>
