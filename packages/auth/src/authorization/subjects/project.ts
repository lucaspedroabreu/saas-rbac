import { z } from 'zod'

export const ProjectSubjectSchema = z.literal('Project')
export type ProjectSubject = z.infer<typeof ProjectSubjectSchema>
