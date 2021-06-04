import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async getAllTodosForAUser(userId: string): Promise<Todo[]> {
    return await this.todoModel.find({ userId });
  }

  async createTodo(userId: string, todoItem: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todoItem);
    newTodo.userId = userId;
    return await newTodo.save();
  }

  async deleteTodoItem(userId: string, todoItem: string): Promise<Todo> {
    return await this.todoModel.findOneAndDelete({ userId, todoItem });
  }

  async updateTodoItem(
    updateTodoItemDto: Todo,
    userId: string,
    todoItem: string,
  ): Promise<Todo> {
    return await this.todoModel.findOneAndUpdate(
      { userId, todoItem },
      updateTodoItemDto,
      { new: true },
    );
  }
}
