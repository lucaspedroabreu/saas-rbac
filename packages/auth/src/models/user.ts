import { z } from 'zod'
import { roleSchema } from './roles'

export const userFieldsForPermissionSchema = z.object({
    __subjectType: z.literal('User').default('User'),
    id: z.string().uuid({ message: 'ID must be a valid uuidV4' }),
    email: z
        .string({ message: 'Email must be a string' })
        .min(1, 'Must entar an email!')
        .email({ message: 'Must enter a valid email address' }),
    role: roleSchema,
})

export type UserFieldsForPermission = z.output<
    typeof userFieldsForPermissionSchema
>
