import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
