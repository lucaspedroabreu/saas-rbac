import { z } from 'zod'

export { BillingActionsSchema } from './billing'
export type { BillingActions } from './billing'

export { InviteActionsSchema } from './invite'
export type { InviteActions } from './invite'

export { OrganizationActionsSchema } from './organizations'
export type { OrganizationActions } from './organizations'

export { ProjectActionsSchema } from './project'
export type { ProjectActions } from './project'

export { UserActionsSchema } from './user'
export type { UserActions } from './user'

export const CRUDschema = z.enum(['create', 'read', 'update', 'delete'])
export type CRUD = z.output<typeof CRUDschema>

export const BaseActionsSchema = CRUDschema.or(z.literal('manage'))
export type BaseActions = z.output<typeof BaseActionsSchema>
