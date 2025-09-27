import { Injectable } from '@angular/core';

type UserProfile = {
  id: number;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  caption: string;
};

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  posts: UserProfile[] = [
    {
      id: 1,
      username: 'LunaTheLab',
      avatarUrl: 'https://placedog.net/40/40?id=21',
      imageUrl: 'https://placedog.net/500/400?id=22',
      caption: 'Chasing squirrels 🐿️ all morning!',
    },
    {
      id: 2,
      username: 'LunaTheLab',
      avatarUrl: 'https://placedog.net/40/40?id=23',
      imageUrl: 'https://placedog.net/500/400?id=24',
      caption: 'New ball, who dis?',
    },
  ];
}
