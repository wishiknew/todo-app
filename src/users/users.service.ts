import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUser(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }

  async createUser(userItem: User): Promise<User> {
    const newUser = new this.userModel(userItem);
    return await newUser.save();
  }

}
