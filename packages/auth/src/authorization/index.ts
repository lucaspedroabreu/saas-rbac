import { AbilityBuilder } from '@casl/ability'
import { UserFieldsForPermission } from '../models/user'
import { AppAbility, createAppAbility } from './abilities'
import { rolePermissions } from './permissions'

export function defineAbilityFor(user: UserFieldsForPermission): AppAbility {
    const builder = new AbilityBuilder(createAppAbility)

    if (typeof rolePermissions[user.role] !== 'function') {
        throw new Error(`User (${user.email}) has unkown role: ${user.role}.`)
    }

    rolePermissions[user.role](user, builder)

    const ability = builder.build({
        detectSubjectType(subject) {
            return subject.__subjectType
        },
    })

    return ability
}
