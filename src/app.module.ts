import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
import { QrModule } from './qr/qr.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ce40bkha6gdkr7rutou0-a.oregon-postgres.render.com',
      port: parseInt(<string>'5432'),
      username: 'postgres1',
      password: process.env.DB_PASSWORD,
      database: 'the_vault',
      autoLoadEntities: true,
      ssl: {rejectUnauthorized: false},
    }),
    FeedModule,
    QrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
