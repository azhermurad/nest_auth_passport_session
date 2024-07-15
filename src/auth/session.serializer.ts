import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SesssionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: any, id?: any) => void): void {
    console.log('serializeUser');

    done(null, { usedId: user.id });
  }

  deserializeUser(payload: any, done: (err: any, id?: any) => void): void {
    console.log('aaaaaaaaaaaaaaaaadeserializeruser');
    // this funcation is for verfiy the session cookei token which is send by the browes
    // when it match than it show the session data
    done(null, payload);
  }
}

// @Injectable()
// export class SessionSerializer extends PassportSerializer {
//   constructor(private readonly usersService: UsersService) {
//     super();
//   }

//   serializeUser(user: any, done: Function) {
//     done(null, user._id);
//   }

//   async deserializeUser(userId: string, done: Function) {
//     const user = await this.usersService.findOneById(userId);
//     done(null, user);
//   }
