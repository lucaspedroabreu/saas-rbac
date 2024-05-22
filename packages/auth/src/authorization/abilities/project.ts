import { z } from 'zod'

import { ProjectActionsSchema } from '../actions'
import { ProjectSubjectSchema } from '../subjects'

export const ProjectAbilitiesSchema = z.tuple([
    ProjectActionsSchema,
    ProjectSubjectSchema,
])
export type ProjectAbilities = z.output<typeof ProjectAbilitiesSchema>
