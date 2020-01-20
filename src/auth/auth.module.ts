import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [LocalStrategy, AuthService]
})
export class AuthModule { }
