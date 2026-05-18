import type { AuthenticatedRequest } from '../common/interfaces/authenticated-request.interface';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
        user: {
            id: string;
            username: string;
            email: string;
        };
    }>;
    me(req: AuthenticatedRequest): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
}
