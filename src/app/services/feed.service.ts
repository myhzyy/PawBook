import { Injectable } from '@angular/core';

type UserProfile = {
  id: number;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  caption: string;
  likes: number;
  postDate: string;
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
      imageUrl: '/images/funny-dog-image-1.jpg',
      caption: 'Chasing squirrels 🐿️ all morning!',
      likes: 503,
      postDate: '22nd August 2023',
    },
    {
      id: 2,
      username: 'BabyJasper1',
      avatarUrl: 'https://placedog.net/40/40?id=23',
      imageUrl: '/images/funny-dog-image.jpg',
      caption: 'New ball, who dis?',
      likes: 423,
      postDate: '23nd July 2023',
    },
    {
      id: 3,
      username: 'GoldenboyCooper3',
      avatarUrl: '/images/golden-boy-pp.jpg',
      imageUrl: '/images/funny-dog-image-2.jpg',
      caption: 'New ball, who dis?',
      likes: 602,
      postDate: '22nd August 2023',
    },
  ];
}
