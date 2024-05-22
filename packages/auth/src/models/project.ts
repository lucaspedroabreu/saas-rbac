import { z } from 'zod'

export const projectFieldsForPermissionSchema = z.object({
    __typename: z.literal('Project').default('Project'),
    id: z.string().uuid({ message: 'ID must be a valid uuidV4' }),
    ownerId: z.string().uuid({ message: 'OwnerID is not a valid uuidV4' }),
})

export type ProjectFieldsForPermission = z.input<
    typeof projectFieldsForPermissionSchema
>
