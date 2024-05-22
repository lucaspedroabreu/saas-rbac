import { z } from 'zod'

export const OrganizationFieldsForPermissionSchema = z.object({
    __typename: z.literal('Organization').default('Organization'),
    id: z.string().uuid({ message: 'ID must be a valid uuidV4' }),
    ownerId: z.string().uuid({ message: 'OwnerID is not a valid uuidV4' }),
})

export type OrganizationFieldsForPermission = z.input<
    typeof OrganizationFieldsForPermissionSchema
>
