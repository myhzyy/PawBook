import { Component, inject } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  imports: [],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
})
export class Feed {
  feedService = inject(FeedService);
}
