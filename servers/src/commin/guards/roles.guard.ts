import { CanActivate, ExecutionContext, Injectable, Inject } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { ForbiddenException } from '../exception/forbiddenException'

@Injectable()
export class RolesGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest()
    const user = req['user']
    if (!user) return false
    return true
    throw new ForbiddenException()
  }
}
