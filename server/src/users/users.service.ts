import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findAllUser(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOneUser(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async findByName(name: string): Promise<Users | null> {
    return this.usersRepository.findOneBy({ name });
  }
}
