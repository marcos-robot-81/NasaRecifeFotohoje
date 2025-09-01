import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { menu } from './coponetes/menu/app.menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
