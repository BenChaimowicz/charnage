import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { Character } from '../characters/character.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column('timestamp with time zone')
    lastLogin: string;

    @Column()
    isActive: boolean;

    @OneToMany(t => Character, character => character.owner)
    characters: Character[];
}
