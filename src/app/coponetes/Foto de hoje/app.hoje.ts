import { Component } from "@angular/core";
import { DadosService } from '../logica/logica';
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'hoje',
    templateUrl: './app.hoje.html',
    styleUrl: './app.hoje.scss',
    imports:[NgOptimizedImage]

}) export class hoje {
    dados = DadosService;
}