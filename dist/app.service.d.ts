import { ReqUser } from './auth/jwt-auth.guard';
export declare class AppService {
    greeting(user: ReqUser): Promise<{
        message: string;
    }>;
}
