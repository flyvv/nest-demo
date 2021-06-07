import { UserEntity } from '../../user/user.entity';
import { RoleEntity } from '../../roles/role.entity';
export declare class UserRoleEntity {
    id: number;
    userId: number;
    roleId: number;
    users: UserEntity;
    roles: RoleEntity;
}
