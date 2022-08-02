import { TodosService } from './todos.service';
import { AddTodo } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodo } from './dto/delete-todo.dto';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    getTodosByUserId(id: string): Promise<false | import("../app.model").Todo[]>;
    addNewTodo(dto: AddTodo): Promise<false | {
        todoId: string;
        title: string;
        isDone: boolean;
    }>;
    updateTodo(dto: UpdateTodoDto): Promise<import("../app.model").Todo>;
    deleteTodo(dto: DeleteTodo): Promise<boolean>;
}
