import { JwtService } from '@nestjs/jwt';
import { IAuthResponse } from '@ycdo/shared';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(email: string, password: string): Promise<IAuthResponse>;
}
