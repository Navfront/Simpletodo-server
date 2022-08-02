"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const app_model_1 = require("../app.model");
let TodosService = class TodosService {
    async getTodosByUserId(userId) {
        return await app_model_1.default.getTodos(userId);
    }
    async addNewTodo(userId, title) {
        return await app_model_1.default.addTodo(userId, title);
    }
    async updateTodo(userId, todo) {
        return await app_model_1.default.updateTodo(userId, todo);
    }
    async deleteTodo(userId, todoId) {
        return await app_model_1.default.removeTodo(userId, todoId);
    }
};
TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map