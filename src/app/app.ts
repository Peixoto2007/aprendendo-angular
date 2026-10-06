import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Olamundo } from './olamundo/olamundo';

@Component({
  imports: [RouterOutlet, Olamundo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aprendendoangularenode');
}
