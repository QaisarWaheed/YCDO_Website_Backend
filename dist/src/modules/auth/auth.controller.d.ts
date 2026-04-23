import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<import("@ycdo/shared").IAuthResponse>;
    getProfile(req: {
        user: {
            userId: string;
            email: string;
            role: string;
        };
    }): {
        userId: string;
        email: string;
        role: string;
    };
}
