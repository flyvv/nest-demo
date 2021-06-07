import { UserRoleEntity } from '../relationalEntities/userRole/userRole.entity';
import { RoleMenuEntity } from '../relationalEntities/roleMenu/roleMenu.entity';
export declare class RoleEntity {
    roleId: number;
    roleName: string;
    remark: string;
    deptId: number;
    createDate: Date;
    userRoles: UserRoleEntity[];
    roleMenus: RoleMenuEntity[];
}
