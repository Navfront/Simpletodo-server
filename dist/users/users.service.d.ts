import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    getUserByLogin(login: string): Promise<import("src/app.model").User>;
    createUser(userData: CreateUserDto): Promise<false | import("src/app.model").User>;
}
