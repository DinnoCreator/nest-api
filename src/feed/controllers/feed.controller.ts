import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MoviePost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){}

    @HttpCode(200)
    @Post()
    create(@Body() body: MoviePost): Observable<MoviePost> {
      return this.feedService.createPost(body);
    }

    @HttpCode(200)
    @Get()
    findAll(): Observable<MoviePost[]> {
      return this.feedService.findAllPosts();
    }
}