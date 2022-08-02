import { Injectable } from '@nestjs/common';

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

let instance = null;

@Injectable()
class UsersModel {
  #users: User[];
  #idCounter: number;

  constructor() {
    this.#idCounter = 0;
    this.#users = [
      {
        userId: this.newId,
        username: 'admin',
        password: '1337',
        todos: [
          { todoId: 'a1', title: 'hello', isDone: false },
          { todoId: 'a2', title: 'goodbuy', isDone: true },
          { todoId: 'a3', title: 'whaat', isDone: true },
        ],
      },
    ];
  }

  private get newId() {
    return String(++this.#idCounter);
  }

  static getInstance() {
    if (!instance) {
      instance = new UsersModel();
    }
    return instance;
  }

  get users() {
    return this.#users;
  }

  async createUser(user: Omit<User, 'token' | 'userId'>) {
    const findedUser = this.#users.find((it) => it.username === user.username);
    if (findedUser) {
      return { message: '', error: 'Username already in use' };
    }
    const newUser = {
      userId: String(++this.#idCounter),
      ...user,
    };
    this.#users.push(newUser);
    console.log(this.#users);

    return { message: newUser };
  }

  async findUserByName(username: string): Promise<User | undefined> {
    return this.#users.find((user) => user.username === username);
  }

  async addTodo(userId: string, title: string) {
    const user = this.#users.find((u) => u.userId === userId);
    if (!user) {
      return false;
    }
    if (!user.todos) {
      user.todos = [];
    }
    const newTodo = { todoId: this.newId, title, isDone: false };
    user.todos.push(newTodo);
    return newTodo;
  }

  async removeTodo(userId: string, todoId: string) {
    console.log(userId, todoId);
    const user = this.#users.find((u) => u.userId === userId);
    if (!user) {
      return false;
    }
    user.todos = user.todos.filter((t) => t.todoId !== todoId);
    return true;
  }

  async getTodos(userId: string) {
    const user = this.#users.find((u) => u.userId === userId);
    if (user.todos) {
      return user.todos;
    }
    return false;
  }

  async updateTodo(userId: string, todo: Todo) {
    const user = this.#users.find((u) => u.userId === userId);
    const index = user.todos.findIndex((t) => t.todoId === todo.todoId);
    user.todos[index] = todo;
    return user.todos[index];
  }
}

export default UsersModel.getInstance();
