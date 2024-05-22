import { z } from 'zod'
import { userFieldsForPermissionSchema } from '../../models/user'

export const UserSubjectSchema = z.union([
    z.literal('User'),
    userFieldsForPermissionSchema,
])
export type UserSubject = z.infer<typeof UserSubjectSchema>
