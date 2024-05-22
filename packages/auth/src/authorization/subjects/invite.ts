import { z } from 'zod'

export const InviteSubjectSchema = z.literal('Invite')
export type InviteSubject = z.infer<typeof InviteSubjectSchema>
