import { Injectable } from '@angular/core';

type UserProfile = {
  id: number;
  username: string;
  avatarUrl: string;
  images: string[];
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
      images: [
        '/images/Luna-the-lab/Luna-the-lab.jpg',
        '/images/Luna-the-lab/Luna-the-lab-2.jpg',
        '/images/Luna-the-lab/Luna-the-lab-3.jpg',
        '/images/Luna-the-lab/Luna-the-lab-4.jpg',
        '/images/Luna-the-lab/Luna-the-lab-5.jpg',
        '/images/Luna-the-lab/Luna-the-lab-6.jpg',
      ],
      caption: 'Chasing squirrels 🐿️ all morning!',
      likes: 503,
      postDate: '22nd August 2023',
    },
    {
      id: 2,
      username: 'BabyJasper1',
      avatarUrl: 'https://placedog.net/40/40?id=23',
      images: [
        '/images/BabyJasper1/BabyJasper-1.jpg',
        '/images/BabyJasper1/BabyJasper-2.jpg',
        '/images/BabyJasper1/BabyJasper-3.jpg',
        '/images/BabyJasper1/BabyJasper-4.jpg',
        '/images/BabyJasper1/BabyJasper-5.jpg',
        '/images/BabyJasper1/BabyJasper-6.jpg',
      ],
      caption: 'New ball, who dis?',
      likes: 423,
      postDate: '23nd July 2023',
    },
    {
      id: 3,
      username: 'Samson-Thedood',
      avatarUrl: '/images/Samson-thedood/samson-thedood-1.jpg',
      images: [
        '/images/Samson-thedood/samson-thedood-1.jpg',
        '/images/Samson-thedood/samson-thedood-2.jpg',
        '/images/Samson-thedood/samson-thedood-3.jpg',
        '/images/Samson-thedood/samson-thedood-4.jpg',
        '/images/Samson-thedood/samson-thedood-5.jpg',
        '/images/Samson-thedood/samson-thedood-6.jpg',
      ],
      caption: 'New ball, who dis?',
      likes: 602,
      postDate: '22nd August 2023',
    },
  ];
}
