import { Routes } from '@angular/router';
import { Feed } from './pages/feed/feed';
import { Profile } from './pages/profile/profile';
import { Notifcations } from './pages/notifcations/notifcations';
import { MeetUps } from './pages/meet-ups/meet-ups';

export const routes: Routes = [
  { path: '', component: Feed },
  { path: 'profile', component: Profile },
  { path: 'notifications', component: Notifcations },
  { path: 'meetUps', component: MeetUps },
];
