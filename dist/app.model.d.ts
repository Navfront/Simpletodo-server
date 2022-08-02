export interface Todo {
    todoId: string;
    title: string;
    isDone: boolean;
}
export interface User {
    userId: string;
    username: string;
    password: string;
    todos?: Todo[];
}
declare class UsersModel {
    #private;
    constructor();
    private get newId();
    static getInstance(): UsersModel;
    get users(): User[];
    createUser(user: Pick<User, 'username' | 'password'>): Promise<false | User>;
    findUserByName(username: string): Promise<User | undefined>;
    addTodo(userId: string, title: string): Promise<false | {
        todoId: string;
        title: string;
        isDone: boolean;
    }>;
    removeTodo(userId: string, todoId: string): Promise<boolean>;
    getTodos(userId: string): Promise<false | Todo[]>;
    updateTodo(userId: string, todo: Todo): Promise<Todo>;
}
declare const _default: UsersModel;
export default _default;
