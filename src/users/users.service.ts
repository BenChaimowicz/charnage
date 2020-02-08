import { CreateUserDto } from './users.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    async create(user: CreateUserDto) {
        let u = await this.findUserByEmail(user.email);
        if (!u) {
            console.log(u);
            const now = new Date();
            const hashedPassword = await this.hashPassword(user.password);
            const newUser: User = await this.userRepo.create({
                email: user.email,
                isActive: true,
                password: hashedPassword,
                lastLogin: now
            });
            return await this.userRepo.save(newUser);
        } else {
            return { error: 'user already exists' };
        }
    }

    async loginUser(user: User) {
        try {
            const savedUser: User = await this.userRepo.findOne({ email: user.email });
            if (savedUser && await bcrypt.compare(user.password, savedUser.password)) {
            }
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    private async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async findUserByEmail(email: string) {
        return await this.userRepo.findOne({ email });
    }

}
