import { AbilityBuilder } from '@casl/ability'
import { Role } from '../models/roles'
import { UserFieldsForPermission } from '../models/user'
import { AppAbility } from './abilities'

type PermissionsByRole = (
    user: UserFieldsForPermission,
    builder: AbilityBuilder<AppAbility>
) => void

export const rolePermissions: Record<Role, PermissionsByRole> = {
    SUPERADMIN: (user, { can }) => {
        can('manage', 'all')
    },
    ADMIN: (user, { can, cannot }) => {
        can('manage', 'all')

        cannot('transfer_ownership', 'Organization')
        can('transfer_ownership', 'Organization', { ownerId: { $eq: user.id } })

        cannot('create', 'Project', {})
    },
    MEMBER: (user, { can }) => {
        can('invite', 'User')
        can('message', 'User')
        can('manage', 'Project')
    },
    BILLING: (_, {}) => {
        throw new Error('Function not implemented.')
    },
}
