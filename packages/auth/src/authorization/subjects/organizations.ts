import { z } from 'zod'

export const OrganizationSubjectSchema = z.literal('Organization')
export type OrganizationSubject = z.infer<typeof OrganizationSubjectSchema>
