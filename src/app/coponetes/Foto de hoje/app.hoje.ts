import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";
import { DadosService, DadosImagem } from '../logica/logica';
import { NgOptimizedImage, NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'hoje',
    templateUrl: './app.hoje.html',
    standalone: true,
    styleUrl: './app.hoje.scss',
    // Adicionamos o AsyncPipe para lidar com Observables no template
    imports:[NgOptimizedImage, NgIf, AsyncPipe]

}) export class hoje {
    private dadosService = inject(DadosService);

    // A propriedade agora é um Observable que será resolvido no template com o pipe async
    public imagemDoDia$: Observable<DadosImagem | null> = this.dadosService.buscarFotoDoDia();
};