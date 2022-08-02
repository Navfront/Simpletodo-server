"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const add_todo_dto_1 = require("./dto/add-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const delete_todo_dto_1 = require("./dto/delete-todo.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    getTodosByUserId(id) {
        console.log(id);
        if (id)
            return this.todosService.getTodosByUserId(id);
    }
    addNewTodo(dto) {
        if (dto)
            return this.todosService.addNewTodo(dto.userId, dto.title);
    }
    updateTodo(dto) {
        if (dto)
            return this.todosService.updateTodo(dto.userId, dto.todo);
    }
    deleteTodo(dto) {
        if (dto)
            return this.todosService.deleteTodo(dto.userId, dto.todoId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех ToDo юзера' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getTodosByUserId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание ToDo' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_todo_dto_1.AddTodo]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "addNewTodo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление ToDo' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "updateTodo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление ToDo' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_todo_dto_1.DeleteTodo]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "deleteTodo", null);
TodosController = __decorate([
    (0, swagger_1.ApiTags)('ToDo'),
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map