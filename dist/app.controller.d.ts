import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    greetings(req: any): Promise<{
        message: string;
    }>;
}
