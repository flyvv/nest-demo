import { Controller, UseGuards, Get, Post, Body, Put, Param, Query, Delete, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from '../../commin/guards/roles.guard'
import { UserService } from './user.service'
import { ApiTags, ApiBearerAuth, ApiOperation, ApiOkResponse } from '@nestjs/swagger'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserRoleDto } from '../relationalEntities/userRole/dto/create-userRole.dto'
import { Permissions } from '../../commin/decorators/permissions.decorator'
import { UpdatePwDto } from './dto/update-pw-dto'

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  @ApiOperation({ summary: '查询用户列表' })
  @ApiOkResponse({ description: '返回用户列表和用户总数' })
  @Permissions('sys_user:list')
  async findList(@Query() query) {
    // @Query('pageSize', new ParseIntPipe()) pageSize: number, @Query('pageNum', new ParseIntPipe()) pageNum: number
    // @Query() query  console.log(query)
    return this.userService.findList(query)
  }

  @Get(':id')
  @ApiOperation({ summary: '查询用户信息' })
  @Permissions('sys_user:list')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(id)
  }

  @Get('list/notRole')
  @ApiOperation({ summary: '查询没有关联当前角色的用户列表' })
  @Permissions('sys_user:roleList')
  async findUserListNotInRoleId(@Query() query: { pageSize: number; pageNum: number; roleId: number }) {
    return this.userService.findUserListNotInRoleId(query)
  }

  @Post('role')
  @ApiOperation({ summary: '创建用户与角色关联' })
  @Permissions('sys_user:createRole')
  async createUserRoleRelation(@Body() userRoles: CreateUserRoleDto[]) {
    return this.userService.createUserRoleRelation(userRoles)
  }

  @Put()
  @ApiOperation({ summary: '根据用户id更新用户信息信息' })
  @ApiOkResponse({ description: '根据用户id更新用户信息', type: UpdateUserDto })
  @Permissions('sys_user:update')
  async update(@Body() userData: UpdateUserDto) {
    return await this.userService.update(userData)
  }

  @Put('update-pw')
  @ApiOperation({ summary: '修改自身密码' })
  async updatePW(@Body() updatePwData: UpdatePwDto, @Request() req) {
    return this.userService.updatePw(Object.assign(updatePwData, req['user'].id))
  }

  @Put(':id/:status')
  @ApiOperation({ summary: '根据用户id 删除用户' })
  @ApiOkResponse({ description: '根据用户id删除用户' })
  @Permissions('sys_user:updateStatus')
  async updateStatus(@Param('id') id: number, @Param('status') status: string) {
    return this.userService.updateStatus(id, status)
  }

  @Put('update-pw/:id')
  @ApiOperation({ summary: '根据用户ID重置用户密码' })
  @Permissions('sys_user:update')
  async resetPossword(@Param('id') id: number) {
    return await this.userService.resetPossword(id)
  }

  @Delete('role/:userId')
  @ApiOperation({ summary: '根据用户id删除用户与角色关系' })
  @Permissions('sys_user:updateRole')
  async cancelUserRoleRelation(@Param('userId') userId: number) {
    return this.userService.cancelUserRoleRelation(userId)
  }
}
