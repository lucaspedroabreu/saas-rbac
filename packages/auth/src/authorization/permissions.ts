import { AbilityBuilder } from '@casl/ability'
import { Role } from '../models/roles'
import { User } from '../models/user'
import { AppAbility } from './abilities'

type DefineUserPermissionsCallback = (
    user: User,
    builder: AbilityBuilder<AppAbility>
) => void
type RolePermissionsObject = Record<Role, DefineUserPermissionsCallback>

export const rolePermissions: RolePermissionsObject = {
    ADMIN: (_, { can }) => {
        can('manage', 'all')
    },
    MEMBER: (_, { can }) => {
        can('invite', 'User')
        can('message', 'User')
        can('manage', 'Project')
    },
    BILLING: (_, {}) => {
        throw new Error('Function not implemented.')
    },
}
