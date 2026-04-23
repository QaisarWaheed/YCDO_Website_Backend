import { ConfigService } from '@nestjs/config';
import { UserRole } from '@ycdo/shared';
type JwtPayload = {
    sub: string;
    email: string;
    role: UserRole;
};
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): {
        userId: string;
        email: string;
        role: UserRole;
    };
}
export {};
