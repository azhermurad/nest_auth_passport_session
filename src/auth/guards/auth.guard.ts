import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthanicationGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get(Roles, context.getHandler());
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
