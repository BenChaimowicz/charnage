import { IsEmail, IsNotEmpty } from 'class-validator';

export interface LoginRequest {
    email: string;
    password: string;
}

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}