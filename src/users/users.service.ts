import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
@Injectable()
export class UsersService {
  // DUMMY DATABASE WITH TWO USER YOU HAVE TO IMPLEMMENT REAL DATATBASE AND FETCH DATA FROM THAT
  private readonly users: User[] = USER_DATA;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

const USER_DATA = [
  {
    id: 1,
    username: 'test',
    email: 'test@test.com',
    password: 'test',
  },
  {
    id: 1,
    username: 'test',
    email: 'test@test.com',
    password: 'test',
  },
];
