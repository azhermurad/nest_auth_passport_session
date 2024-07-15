import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthanicationGuard } from './auth/guards/auth.guard';
import { Public } from './auth/decorators/public.decorator';

@Controller()
@UseGuards(AuthanicationGuard) // apply to all routes
export class AppController {
  @Public() // this is public
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req: Request) {
    console.log(req.user, req.isAuthenticated);
    return req.user;
  }

  @Get('protected')
  getHello(@Req() req): string {
    return req.user;
  }
  @Get('logout')
  async logout(@Req() req: any) {
    req.logout(function (err: any) {
      if (err) {
        return err;
      }
      console.log(req.session);
      req.session.destroy();
    });
    return { message: 'Logged out successfully' };
  }

  // productuts
  @Public()
  @Get('/allUsers')
  getAllUser() {
    return [
      {
        name: 'azher',
      },
    ];
  }
}
