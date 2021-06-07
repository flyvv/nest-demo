import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class BaseController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: CreateUserDto): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    login(userData: LoginUserDto): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
}
