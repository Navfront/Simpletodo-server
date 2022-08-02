"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UsersModel_users, _UsersModel_idCounter;
Object.defineProperty(exports, "__esModule", { value: true });
let instance = null;
class UsersModel {
    constructor() {
        _UsersModel_users.set(this, void 0);
        _UsersModel_idCounter.set(this, void 0);
        __classPrivateFieldSet(this, _UsersModel_idCounter, 0, "f");
        __classPrivateFieldSet(this, _UsersModel_users, [
            {
                userId: 'user' + this.newId,
                username: 'admin',
                password: '$2b$05$DDP8zfsro6vNXSNtZGiZo.6wGDaA3odsenjhpm4aJCsRPilazkUsO',
                todos: [
                    { todoId: 'a1', title: 'hello', isDone: false },
                    { todoId: 'a2', title: 'goodbuy', isDone: true },
                    { todoId: 'a3', title: 'whaat', isDone: true },
                ],
            },
        ], "f");
    }
    get newId() {
        var _a;
        return String(__classPrivateFieldSet(this, _UsersModel_idCounter, (_a = __classPrivateFieldGet(this, _UsersModel_idCounter, "f"), ++_a), "f"));
    }
    static getInstance() {
        if (!instance) {
            instance = new UsersModel();
        }
        return instance;
    }
    get users() {
        return __classPrivateFieldGet(this, _UsersModel_users, "f");
    }
    async createUser(user) {
        var _a;
        const findedUser = __classPrivateFieldGet(this, _UsersModel_users, "f").find((it) => it.username === user.username);
        if (findedUser) {
            return false;
        }
        const newUser = Object.assign(Object.assign({ userId: 'user' + String(__classPrivateFieldSet(this, _UsersModel_idCounter, (_a = __classPrivateFieldGet(this, _UsersModel_idCounter, "f"), ++_a), "f")) }, user), { todos: [] });
        __classPrivateFieldGet(this, _UsersModel_users, "f").push(newUser);
        return newUser;
    }
    async findUserByName(username) {
        const user = __classPrivateFieldGet(this, _UsersModel_users, "f").find((user) => user.username === username);
        return user;
    }
    async addTodo(userId, title) {
        const user = __classPrivateFieldGet(this, _UsersModel_users, "f").find((u) => u.userId === userId);
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
    async removeTodo(userId, todoId) {
        console.log(userId, todoId);
        const user = __classPrivateFieldGet(this, _UsersModel_users, "f").find((u) => u.userId === userId);
        if (!user) {
            return false;
        }
        user.todos = user.todos.filter((t) => t.todoId !== todoId);
        return true;
    }
    async getTodos(userId) {
        const user = __classPrivateFieldGet(this, _UsersModel_users, "f").find((u) => u.userId === userId);
        if (user.todos) {
            return user.todos;
        }
        return false;
    }
    async updateTodo(userId, todo) {
        const user = __classPrivateFieldGet(this, _UsersModel_users, "f").find((u) => u.userId === userId);
        const index = user.todos.findIndex((t) => t.todoId === todo.todoId);
        user.todos[index] = todo;
        return user.todos[index];
    }
}
_UsersModel_users = new WeakMap(), _UsersModel_idCounter = new WeakMap();
exports.default = UsersModel.getInstance();
//# sourceMappingURL=app.model.js.map