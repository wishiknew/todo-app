import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { TodoItemDto } from './dto/todoItem.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  // get all the todo items
  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }
  // get todos for a particular user
  @Get(':userId')
  getAllTodosForAUser(@Param('userId') userId: string): Promise<Todo[]> {
    return this.todosService.getAllTodosForAUser(userId);
  }
  // create a todo for a particular user
  @Post(':userId')
  createTodoItem(
    @Body() todoItemDto: TodoItemDto,
    @Param('userId') userId: string,
  ): Promise<Todo> {
    return this.todosService.createTodo(userId, todoItemDto);
  }
  // delete a particular user's single todo
  @Delete(':userId/:todoItem')
  deleteTodoItem(
    @Param('userId') userId: string,
    @Param('todoItem') todoItem: string,
  ): Promise<Todo> {
    return this.todosService.deleteTodoItem(userId, todoItem);
  }
  // update a particular user's single todo
  @Put(':userId/:todoItem')
  updateTodoItem(
    @Body() updateTodoItemDto: TodoItemDto,
    @Param('userId') userId: string,
    @Param('todoItem') todoItem: string,
  ): Promise<Todo> {
    return this.todosService.updateTodoItem(
      updateTodoItemDto,
      userId,
      todoItem,
    );
  }
}
