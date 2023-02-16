import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthJwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Неверный токен' });
      }

      const user = this.jwtService.verify(token);

      // if (user.user.role !== 'Admin') {
      //   throw new UnauthorizedException({
      //     message: 'У вас не достаточно прав',
      //   });
      // }

      req.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException({
        message: error.message,
      });
    }
  }
}