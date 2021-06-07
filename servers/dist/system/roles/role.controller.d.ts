import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAllList(): Promise<{
        statusCode: number;
        message: string;
        data: import("./role.entity").RoleEntity[];
    }>;
    findList(query: any): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    findOne(id: number): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    create(role: CreateRoleDto): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    update(roleData: UpdateRoleDto): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
    delete(id: number): Promise<import("../../commin/interfaces/result.interface").ResponseData>;
}
