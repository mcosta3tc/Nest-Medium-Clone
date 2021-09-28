import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  async createUser(createUserData: CreateUserDto): Promise<any> {
    return createUserData;
  }
}
