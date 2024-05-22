import { z } from 'zod'

export const UserSubjectSchema = z.literal('User')
export type UserSubject = z.infer<typeof UserSubjectSchema>
