import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({}); // configaration for the strategy each strategy have different configuration value so we have to put them here
    // if you want to email login with email then
    // super({username:"email"})
  }
  // each strategy class should have the validate method
  async validate(username: string, password: string, email: string) {
    console.log(username, password);
    const user = await this.authService.validateUser(username, password);

    return user;
  }
}
