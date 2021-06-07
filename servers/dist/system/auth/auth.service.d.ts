import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(payload: {
        id: number;
    }): Promise<UserEntity>;
}
