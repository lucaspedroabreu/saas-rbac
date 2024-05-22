import { AbilityBuilder } from '@casl/ability'
import { Role } from '../models/roles'
import { UserFieldsForPermission } from '../models/user'
import { AppAbility } from './abilities'

type PermissionsByRole = (
    user: UserFieldsForPermission,
    builder: AbilityBuilder<AppAbility>
) => void

export const rolePermissions: Record<Role, PermissionsByRole> = {
    SUPERADMIN: (_, { can }) => {
        can('manage', 'all')
    },
    ADMIN: (user, { can, cannot }) => {
        can('manage', 'all')

        cannot(['transfer_ownership', 'update', 'delete'], 'Organization')
        can(['transfer_ownership', 'update', 'delete'], 'Organization', {
            ownerId: { $eq: user.id },
        })
    },
    MEMBER: (user, { can }) => {
        can(['read', 'invite', 'message'], 'User')
        can('manage', 'User', { id: { $eq: user.id } })

        can(['create', 'read'], 'Project')
        can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
    },
    BILLING: (_, { can }) => {
        can('manage', 'Billing')
    },
}
