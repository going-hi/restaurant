import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UseGuards,
  applyDecorators,
} from '@nestjs/common';
import { RoleEnum } from '../../core/enums';
import { AccessJwtGuard } from '@auth/guards';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<RoleEnum[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    if (!roles) return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.some((role) => user.role === role);
  }
}

export const ROLES_KEY = 'roles';

export const RoleAuthGuard = (...roles: RoleEnum[]) => {
  return applyDecorators(
    AccessJwtGuard(),
    SetMetadata(ROLES_KEY, roles),
    UseGuards(RolesGuard),
  );
};
