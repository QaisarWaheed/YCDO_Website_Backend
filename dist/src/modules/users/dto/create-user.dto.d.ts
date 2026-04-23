import { UserRole } from '@ycdo/shared';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
