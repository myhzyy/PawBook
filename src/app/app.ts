import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DogEvents } from './components/dog-events/dog-events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DogEvents, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('pawbook');
}
