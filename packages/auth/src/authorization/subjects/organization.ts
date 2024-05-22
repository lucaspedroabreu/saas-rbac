import { z } from 'zod'
import { OrganizationFieldsForPermissionSchema } from '../../models/organization'

export const OrganizationSubjectSchema = z.union([
    z.literal('Organization'),
    OrganizationFieldsForPermissionSchema,
])
export type OrganizationSubject = z.infer<typeof OrganizationSubjectSchema>
