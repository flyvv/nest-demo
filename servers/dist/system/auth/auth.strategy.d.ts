import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
declare const AuthStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthStrategy extends AuthStrategy_base {
    private readonly authService;
    private readonly config;
    constructor(authService: AuthService, config: ConfigService);
    validate(payload: {
        id: number;
    }): Promise<import("../user/user.entity").UserEntity>;
}
export {};
