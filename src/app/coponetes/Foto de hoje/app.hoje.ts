import { Component, inject } from "@angular/core";
import { DadosService } from '../logica/logica';
import { NgOptimizedImage, NgIf } from '@angular/common';


@Component({
    selector: 'hoje',
    templateUrl: './app.hoje.html',
    styleUrl: './app.hoje.scss',
    imports:[NgOptimizedImage, NgIf]

}) export class hoje {
    dados = inject(DadosService);
    url = '';

   
    
};