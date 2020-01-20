import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(t => User, user => user.characters)
    owner: User;

    @Column()
    name: string;
}
