import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    async create(user: User) {
        const hashedPassword = await this.hashPassword(user.password);
        return this.userRepo.create({
            email: user.email,
            isActive: true,
            password: hashedPassword
        });
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
        return bcrypt.hash(password, 10);
    }

}
