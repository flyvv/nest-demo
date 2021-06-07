import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserRoleDto } from '../relationalEntities/userRole/dto/create-userRole.dto';
import { UpdatePwDto } from './dto/update-pw-dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findList(query: any): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    findOne(id: number): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    findUserListNotInRoleId(query: {
        pageSize: number;
        pageNum: number;
        roleId: number;
    }): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    createUserRoleRelation(userRoles: CreateUserRoleDto[]): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    update(userData: UpdateUserDto): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    updatePW(updatePwData: UpdatePwDto, req: any): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    updateStatus(id: number, status: string): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    resetPossword(id: number): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    cancelUserRoleRelation(userId: number): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
}
