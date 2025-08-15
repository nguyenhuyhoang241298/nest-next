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

  async createUser(user: Omit<Users, 'id'>) {
    const createdUser = await this.usersRepository.save(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = createdUser;
    return result;
  }

  async updateUser(id: number, user: Partial<Users>) {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOneBy({ id });
  }

  async deleteUser(id: number) {
    return await this.usersRepository.delete({ id });
  }
}
