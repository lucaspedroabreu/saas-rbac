import { z } from 'zod'
import { projectFieldsForPermissionSchema } from '../../models/project'

export const ProjectSubjectSchema = z.union([
    z.literal('Project'),
    projectFieldsForPermissionSchema,
])
export type ProjectSubject = z.infer<typeof ProjectSubjectSchema>
