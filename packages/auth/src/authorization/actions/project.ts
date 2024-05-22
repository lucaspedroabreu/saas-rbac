import { z } from 'zod'
import { BaseActionsSchema } from '../actions'

export const ProjectActionsSchema = BaseActionsSchema.or(z.literal('share'))
export type ProjectActions = z.infer<typeof ProjectActionsSchema>
