import { ConfigService } from '@nestjs/config';

export const getConfigJWT = async (configService: ConfigService) => {
  return {
    secret: configService.get('JWT_SECRET'),
    singOptions: { expiresIn: '30s' },
  };
};
