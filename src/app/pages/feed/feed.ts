import { Component, inject } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { DogEvents } from '../../components/dog-events/dog-events';

@Component({
  selector: 'app-feed',
  imports: [DogEvents],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
})
export class Feed {
  feedService = inject(FeedService);
}
