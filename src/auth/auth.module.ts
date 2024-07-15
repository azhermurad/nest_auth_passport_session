import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SesssionSerializer } from './session.serializer';

@Module({
  providers: [AuthService, LocalStrategy, SesssionSerializer],
  imports: [UsersModule, PassportModule.register({ session: true })],
})
export class AuthModule {}
