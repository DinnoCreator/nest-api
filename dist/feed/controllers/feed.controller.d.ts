import { Observable } from 'rxjs';
import { MoviePost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';
export declare class FeedController {
    private feedService;
    constructor(feedService: FeedService);
    create(body: MoviePost): Observable<MoviePost>;
    findAll(): Observable<MoviePost[]>;
}
