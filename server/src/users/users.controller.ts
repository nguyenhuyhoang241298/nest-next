import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.usersService.findAllUser();
  }
}
