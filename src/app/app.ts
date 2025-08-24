import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { menu } from './coponetes/menu/app.menu'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('foto');
}
