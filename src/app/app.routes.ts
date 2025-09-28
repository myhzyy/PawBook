import { Routes } from '@angular/router';
import { Feed } from './pages/feed/feed';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: Feed },
  { path: 'profile', component: Profile },
];
