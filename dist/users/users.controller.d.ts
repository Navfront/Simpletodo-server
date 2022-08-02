import { GetUserByLogin } from './dto/get-user-by-login.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUserByLogin(dto: GetUserByLogin, req: any): Promise<import("../app.model").User>;
}
