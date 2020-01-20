import { LoginRequest } from './users.interface';
import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService) { }

    @Post()
    createUser(loginReq: LoginRequest) {

    }
}
