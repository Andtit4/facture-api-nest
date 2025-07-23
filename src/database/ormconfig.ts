import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
// import { configDotenv } from 'dotenv';
// import { UserEntity } from '../auth/infrastructure/typeorm/entities/user.entity';
// configDotenv();
dotenv.config();

export const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  // type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
};
