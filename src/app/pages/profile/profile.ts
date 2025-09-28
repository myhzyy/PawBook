import { Component } from '@angular/core';
import { PhotoGrid } from '../../components/photo-grid/photo-grid';

@Component({
  selector: 'app-profile',
  imports: [PhotoGrid],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
