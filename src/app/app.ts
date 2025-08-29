import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { menu } from './coponetes/menu/app.menu';
import { DadosService } from './coponetes/logica/logica';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imagems = inject(DadosService);

  CaregaFoto(){
    this.imagems.buscarFotoDoDia();
  }


  protected readonly title = signal('foto');

  
}
