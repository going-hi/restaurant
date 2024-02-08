import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common"
import { Role } from "../Role.enum"
import { AccessJwtGuard } from "src/auth/decorators"
import { RolesGuard } from "../guards/role.guard"

export const ROLES_KEY = 'roles'

export const RoleAuth = (...roles: Role[]) => {
    return applyDecorators(
        AccessJwtGuard(),
        SetMetadata(ROLES_KEY, roles),
        UseGuards(RolesGuard)
    )
}