import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { Role } from './infrastructure/database/models/role.model';
import { User } from './infrastructure/database/models/user.model';
import { PresentationModule } from './infrastructure/ioc/presentation.module';
import { RolesModule } from './infrastructure/ioc/roles.module';
import { UseCasesModule } from './infrastructure/ioc/use-cases.module';
import { UsersModule } from './infrastructure/ioc/users.module';
import configuration from './infrastructure/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        models: [Role, User],
        synchronize: false,
        logging: false,
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
    RolesModule,
    PresentationModule,
    UseCasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
