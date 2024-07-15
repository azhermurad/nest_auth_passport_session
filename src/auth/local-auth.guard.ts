import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean; // THIS MUST BE CALLED FIRST
    const request = context.switchToHttp().getRequest();

    await super.logIn(request);
    return result;
  }
}
