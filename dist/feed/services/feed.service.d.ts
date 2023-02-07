import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { MoviePostEntity } from '../models/post.entity';
import { MoviePost } from '../models/post.interface';
export declare class FeedService {
    private readonly moviePostRepository;
    constructor(moviePostRepository: Repository<MoviePostEntity>);
    createPost(moviePost: MoviePost): Observable<MoviePost>;
    findAllPosts(): Observable<MoviePost[]>;
}
