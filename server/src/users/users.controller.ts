import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAllUser();
  }

  @Post()
  async createUser(@Body() user: UserDto) {
    return await this.usersService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: UserDto) {
    return await this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    const result = await this.usersService.deleteUser(id);

    if (!result || !result.affected)
      throw new NotFoundException('User can not be found');

    return { message: 'Delete successfully' };
  }
}
