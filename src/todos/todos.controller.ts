import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { AddTodo } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodo } from './dto/delete-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get('/:id')
  getTodosByUserId(@Param('id') id: string) {
    console.log(id);
    if (id) return this.todosService.getTodosByUserId(id);
  }

  @Post('/')
  addNewTodo(@Body() dto: AddTodo) {
    if (dto) return this.todosService.addNewTodo(dto.userId, dto.title);
  }

  @Put('/')
  updateTodo(@Body() dto: UpdateTodoDto) {
    if (dto) return this.todosService.updateTodo(dto.userId, dto.todo);
  }

  @Delete('/')
  deleteTodo(@Body() dto: DeleteTodo) {
    if (dto) return this.todosService.deleteTodo(dto.userId, dto.todoId);
  }
}
