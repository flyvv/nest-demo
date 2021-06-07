import { UserRoleEntity } from '../relationalEntities/userRole/userRole.entity';
export declare class UserEntity {
    id: number;
    password: string;
    account: string;
    nickname: string;
    phoneNum: string;
    email: string;
    status: boolean;
    avatar: string;
    deptId: number;
    userRoles: UserRoleEntity[];
    createDate: Date;
    updateDate: Date;
}
