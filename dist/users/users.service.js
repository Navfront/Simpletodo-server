"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const app_model_1 = require("../app.model");
let UsersService = class UsersService {
    async getUserByLogin(login) {
        const user = await app_model_1.default.findUserByName(login);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async createUser(userData) {
        return await app_model_1.default.createUser({
            username: userData.login,
            password: userData.password,
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map