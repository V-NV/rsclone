import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const requiredRoles = this.reflector.get<string[]>(
        ROLES_KEY,
        context.getHandler(),
      );

      if (!requiredRoles) {
        return true;
      }

      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Ошибка авторизации' });
      }

      const userCrypt = this.jwtService.verify(token);

      req.user = userCrypt;
      const access = userCrypt.user.role.includes(requiredRoles);
      if (access === false) {
        throw new UnauthorizedException({ message: 'Недостаточно прав' });
      }
      return access;
    } catch (error) {
      throw new UnauthorizedException({ message: error.message });
    }
  }
}
