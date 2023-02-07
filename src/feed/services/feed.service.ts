
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { MoviePostEntity } from '../models/post.entity';
import { MoviePost } from '../models/post.interface';
@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(MoviePostEntity)
        private readonly moviePostRepository: Repository<MoviePostEntity>
    ) {}

    createPost(moviePost: MoviePost): Observable<MoviePost>{
        return from(this.moviePostRepository.save(moviePost));
    }

    findAllPosts(): Observable<MoviePost[]> {
        return from(this.moviePostRepository.find());
    }
}