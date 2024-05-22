import { CreateAbility, createMongoAbility, MongoAbility } from '@casl/ability'
import { BaseActions } from '../actions'
import { BillingAbilities } from './billing'
import { InviteAbilities } from './invite'
import { OrganizationAbilities } from './organizations'
import { ProjectAbilities } from './project'
import { UserAbilities } from './user'

export type AppAbilities =
    | UserAbilities
    | ProjectAbilities
    | OrganizationAbilities
    | InviteAbilities
    | BillingAbilities
    | [BaseActions | 'manage', 'all']

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>
