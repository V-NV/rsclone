import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoDBConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => {
  return {
    url: getMongoConnect(configService),
    ...getMongoOptions(),
  };
};

export const getMongoConnect = (configService: ConfigService) =>
  'mongodb+srv://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@' +
  configService.get('MONGO_HOST') +
  '/?' +
  configService.get('MONGO_OPTIONS');

const getMongoOptions = () => ({
  useNewURLParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
