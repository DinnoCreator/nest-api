import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviePostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MoviePostEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}