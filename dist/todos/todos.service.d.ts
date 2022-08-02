import { Todo } from 'src/app.model';
export declare class TodosService {
    getTodosByUserId(userId: string): Promise<false | Todo[]>;
    addNewTodo(userId: string, title: string): Promise<false | {
        todoId: string;
        title: string;
        isDone: boolean;
    }>;
    updateTodo(userId: string, todo: Todo): Promise<Todo>;
    deleteTodo(userId: string, todoId: string): Promise<boolean>;
}
