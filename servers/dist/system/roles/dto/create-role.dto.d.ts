import { CreateRoleMenuDto } from '../../relationalEntities/roleMenu/dto/create-roleMenu.dto';
export declare class CreateRoleDto {
    readonly roleName: string;
    readonly remark: string;
    readonly deptId: number;
    readonly roleMenus: CreateRoleMenuDto[];
}
