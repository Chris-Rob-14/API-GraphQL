/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { create } from "domain";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 'user-1',
      login: 'Chris',
      email: 'chris@gmail.com',
      firstName: 'Chris',
      lastName: 'Robine',
      creationDate: new Date(),
    },
    {
      id: 'user-2',
      login: 'Krys',
      email: 'Krys@gmail.com',
      firstName: 'Krys',
      lastName: 'Robine',
      creationDate: new Date(),
    },
  ];

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user: User = {
      id: `user-${this.users.length}`,
      login: createUserInput.login,
      email: createUserInput.email,
      firstName: createUserInput.firstName ?? 'No first name',
      lastName: createUserInput.lastName ?? 'No last name',
      creationDate: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
