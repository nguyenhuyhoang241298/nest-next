import { Pool } from '@neondatabase/serverless';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: Pool) {}

  async findAllUser(): Promise<User[]> {
    const data = await this.sql.query('SELECT * FROM users');
    return data.rows as User[];
  }
}
